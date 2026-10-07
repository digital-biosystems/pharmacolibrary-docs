<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;grepafloxacin&quot;}]"></div>

# grepafloxacin

- **generic name:** grepafloxacin
- **ATC codes:** `J01MA11`
- **DrugBank:** [DB00365](https://go.drugbank.com/drugs/DB00365) · **PubChem:** [CID 72474](https://pubchem.ncbi.nlm.nih.gov/compound/72474)
- **molar mass:** 359.3947 g/mol (C19H22FN3O3) — DrugBank
- **groups:** approved, withdrawn

## About

Grepafloxacin is a fluoroquinolone antibiotic that was used to treat bacterial infections. It has been withdrawn from the market because of safety concerns, reportedly serious heart-related side effects.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414846](https://www.wikidata.org/wiki/Q414846) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| grepafloxacin | parent | 359.395 | C19H22FN3O3 | DrugBank | [72474](https://pubchem.ncbi.nlm.nih.gov/compound/72474) | Pfister_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:26 | 0:47 | 0/1/0 | 1/0/0 | 0/0/0 | 32,370/1,925 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Pfister_2003_reference](drugs/drug_grepafloxacin/Grepafloxacin_Pfister2003_reference.md) | — | 1-compartment (no model) | 1 | Pfister M et al., Modeling of transfer kinetics at the se…, Antimicrobial agents and ch… (2003) | [10.1128/AAC.47.1.138-143.2003](https://doi.org/10.1128/AAC.47.1.138-143.2003) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Ernst_2002_survival_rate_at_72_hours](drugs/drug_grepafloxacin/pd_Ernst_2002_survival_rate_at_72_hours.md) | survival rate at 72 hours ← grepafloxacin · direct sigmoid Emax (Hill) effect | — | Ernst EJ et al., Evaluation of survival and pharmacodyna…, Pharmacotherapy (2002) | [10.1592/phco.22.7.463.33670](https://doi.org/10.1592/phco.22.7.463.33670) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=grepafloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `SLC22A5` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A2` inhibitor, `SLC22A6` substrate | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Forrest_1997.pdf` | Forrest A et al., Pharmacokinetics and pharmacodynamics o…, The Journal of antimicrobia… (1997) | popPK | 8 | [10.1093/jac/40.suppl_1.45](https://doi.org/10.1093/jac/40.suppl_1.45) | [9484873](https://pubmed.ncbi.nlm.nih.gov/9484873) | The paper describes a population PK study for grepafloxacin in humans, but the evidence provided contains only qualitative model descriptions and AUIC ranges without explicit numeric parameter values like clearance or volume of distribution. |

<sub>queue written 2026-10-07T12:25:43.276833+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bischoff_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring HERG channel inhibition, not a pharmacokinetic study. |
| popPK | Ernst_2002 | irrelevant | 1 | 0 | This is a pharmacodynamic efficacy study in mice that measures survival and AUC:MIC ratios rather than reporting quantitative disposition parameters (CL, V, ka) for grepafloxacin. |
| popPK | Esposito_2000 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamic study comparing bactericidal activity, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Forrest_1997 | relevant | 8 | 3 | The paper describes a population PK study for grepafloxacin in humans, but the evidence provided contains only qualitative model descriptions and AUIC ranges without explicit numeric parameter values like clearance or volume of distribution. |
| popPK | Hirano_2006 | irrelevant | 0 | 0 | The study focuses on in-vitro transport mechanisms and inhibition of carnitine uptake by grepafloxacin, not pharmacokinetic disposition parameters. |
| popPK | Meinl_2000 | irrelevant | 0 | 0 | This is a clinical outcome study analyzing Pharmacokinetic/Pharmacodynamic (PK/PD) predictors (specifically AUIC) rather than a study reporting population pharmacokinetic parameter estimates (CL, V, ka, etc.) for grepafloxacin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:25 UTC</sub>
