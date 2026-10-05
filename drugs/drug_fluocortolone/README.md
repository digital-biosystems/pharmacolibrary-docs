<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;fluocortolone&quot;}]"></div>

# fluocortolone

- **generic name:** fluocortolone
- **ATC codes:** `C05AA08`, `D07AC05`, `D07BC03`, `D07CC06`, `D07XC05`, `H02AB03`, `S01CA04`
- **DrugBank:** [DB08971](https://go.drugbank.com/drugs/DB08971) · **PubChem:** [CID 9053](https://pubchem.ncbi.nlm.nih.gov/compound/9053)
- **molar mass:** 376.4617 g/mol (C22H29FO4) — DrugBank
- **groups:** approved, withdrawn

## About

Fluocortolone is a glucocorticoid (corticosteroid) with anti-inflammatory activity, used topically for skin conditions, haemorrhoids, and eye inflammation, and also systemically. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5462793](https://www.wikidata.org/wiki/Q5462793) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 10:03 | 0:42 | 0/0/0 | 0/1/0 | 0/0/0 | 1,382/140 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Dirks_2008_SEAP](drugs/drug_fluocortolone/pd_Dirks_2008_SEAP.md) | SEAP reporter expression via NF-kB transrepression ← glucocorticoids (budesonide, desisobutyryl-ciclesonide, dexamethasone, flunisolide, fluocortolone, fluticasone propionate, mometasone furoate, prednisolone, triamcinolone acetonide) · direct Emax (saturable) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Dirks_2008_chemiluminescence](drugs/drug_fluocortolone/pd_Dirks_2008_chemiluminescence.md) | SEAP ← glucocorticoids (budesonide, desisobutyryl-ciclesonide, dexamethasone, flunisolide, fluocortolone, fluticasone propionate, mometasone furoate, prednisolone, triamcinolone acetonide) · direct Emax (saturable) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluocortolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Legler_1988.pdf` | Legler UF, Lack of impairment of fluocortolone dis…, European journal of clinica… (1988) | popPK | 9 | [10.1007/BF00555517](https://doi.org/10.1007/BF00555517) | [3220090](https://pubmed.ncbi.nlm.nih.gov/3220090) | The study is a pharmacokinetic investigation of fluocortolone in humans, but the provided evidence contains only qualitative descriptions of results (e.g., "no significant change") without any specific numeric parameter values. |
| `Rohatagi_1996.pdf` | Rohatagi S et al., Pharmacokinetic/pharmacodynamic modelin…, Journal of clinical pharmac… (1996) | popPK | 9 | [10.1002/j.1552-4604.1996.tb04206.x](https://doi.org/10.1002/j.1552-4604.1996.tb04206.x) | [8728344](https://pubmed.ncbi.nlm.nih.gov/8728344) | The paper describes a PK/PD study of fluocortolone with a compartmental model, but the specific numeric PK parameter values (CL, V, ka) are not present in the provided evidence, only the PD parameter E50. |
| `Lew_1993.pdf` | Lew KH et al., Pharmacodynamic modeling of cortisol su…, European journal of clinica… (1993) | pd | 5 | [10.1007/BF00315319](https://doi.org/10.1007/BF00315319) | [8157047](https://www.ncbi.nlm.nih.gov/pubmed/8157047) | metadata signals extractable PD data (Pharmacodynamicmodel) |

<sub>queue written 2026-09-30T10:03:16.112001+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dirks_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transcriptional potency (EC50) in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume for fluocortolone. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a clinical review of topical corticosteroid strategies for eczema and does not report pharmacokinetic parameters for fluocortolone. |
| PD | Lax_2022 | not_relevant | 0 | 0 | The paper is a clinical review of topical corticosteroid strategies and does not report any pharmacokinetic or pharmacodynamic modeling, nor specific numeric PD parameters for fluocortolone. |
| popPK | Legler_1988 | relevant | 9 | 0 | The study is a pharmacokinetic investigation of fluocortolone in humans, but the provided evidence contains only qualitative descriptions of results (e.g., "no significant change") without any specific numeric parameter values. |
| PD | Legler_1988 | not_relevant | 0 | 0 | The paper reports only PK parameters (clearance, volume of distribution) and a qualitative observation of increased hydrocortisone levels, with no concentration-effect or dose-response analysis for fluocortolone. |
| popPK | Lew_1993 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling of cortisol suppression and reports an IC50 value, but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) for fluocortolone. |
| popPK | Rohatagi_1996 | relevant | 9 | 1 | The paper describes a PK/PD study of fluocortolone with a compartmental model, but the specific numeric PK parameter values (CL, V, ka) are not present in the provided evidence, only the PD parameter E50. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
