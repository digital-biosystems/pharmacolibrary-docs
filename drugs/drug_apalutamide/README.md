<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;apalutamide&quot;}]"></div>

# apalutamide

- **generic name:** apalutamide
- **ATC codes:** `L02BB05`
- **DrugBank:** [DB11901](https://go.drugbank.com/drugs/DB11901) · **PubChem:** [CID 24872560](https://pubchem.ncbi.nlm.nih.gov/compound/24872560)
- **molar mass:** 477.44 g/mol (C21H15F4N5O2S) — DrugBank
- **groups:** approved, investigational

## About

Apalutamide is an anti-androgen cancer medicine used to treat prostate cancer. It is approved and authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098975](https://www.wikidata.org/wiki/Q21098975) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| N-desmethyl-apalutamide | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:13 | 3:20 | 0/1/0 | 0/0/0 | 0/0/0 | 400,615/43,879 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Pérez-Ruixo_2020_reference](drugs/drug_apalutamide/Apalutamide_PrezRuixo2020_reference.md) | — | parent + metabolite (no model) | 0 | Pérez-Ruixo C et al., Population Pharmacokinetics of Apalutam…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00808-7](https://doi.org/10.1007/s40262-019-00808-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=apalutamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer, `ABCG2` inducer | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer, `ABCG2` inducer | DrugBank actor |
| absorption | mammary gland | `ABCG2` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `ABCG2` inducer | DrugBank actor |
| absorption | testis | `ABCB1` inducer, `ABCG2` inducer | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C19` inducer, `CYP2C8` substrate, `CYP2C9` inducer, `CYP3A4` inducer/substrate, `SLCO1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pérez-Ruixo_2020.pdf` | Pérez-Ruixo C et al., Population Pharmacokinetics of Apalutam…, Clinical pharmacokinetics (2020) | popPK | 10 | [10.1007/s40262-019-00808-7](https://doi.org/10.1007/s40262-019-00808-7) | [31432469](https://pubmed.ncbi.nlm.nih.gov/31432469) | The abstract provides key quantitative population PK parameters (apparent clearance and volume of distribution) for apalutamide in human subjects. |

<sub>queue written 2026-10-06T22:09:52.698458+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Myint_2020 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis evaluating the safety outcomes (falls and fractures) of androgen receptor inhibitors, not a pharmacokinetic study, and contains no PK parameters for apalutamide. |
| popPK | Perez-Ruixo_2020 | irrelevant | 0 | 0 | The study is an exposure-response analysis of efficacy and safety, reporting AUC ranges and dose reductions rather than quantitative compartmental pharmacokinetic parameters (CL, V, Ka, etc.). |
| popPK | Shen_2024 | irrelevant | 0 | 0 | The paper is a post-hoc analysis of efficacy and safety outcomes (OS, PFS, HRQoL) in Phase 3 trials and does not report pharmacokinetic parameters for apalutamide. |
| popPK | Tjollyn_2022 | irrelevant | 4 | 0 | The study applies a previously developed population PK model to explore exposure-response relationships but does not report new quantitative PK parameter values (CL, V, etc.) in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:10 UTC</sub>
