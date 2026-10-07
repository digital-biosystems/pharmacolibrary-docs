<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;pimecrolimus&quot;}]"></div>

# pimecrolimus

- **generic name:** pimecrolimus
- **ATC codes:** `D11AH02`
- **DrugBank:** [DB00337](https://go.drugbank.com/drugs/DB00337) · **PubChem:** [CID 6509979](https://pubchem.ncbi.nlm.nih.gov/compound/6509979)
- **molar mass:** 810.46 g/mol (C43H68ClNO11) — DrugBank
- **groups:** approved, investigational

## About

Pimecrolimus is a non-steroidal calcineurin inhibitor used to treat atopic dermatitis. It is an approved dermatological medicine, applied to the skin, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417489](https://www.wikidata.org/wiki/Q417489) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:47 | 7:03 | 0/0/0 | 3/0/0 | 0/0/0 | 135,886/1,802 | einfracz / qwen3.8-27b | 8 | 0/2 | 7/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Nagao_2013_ABCA1_mediated_cholesterol_efflux](drugs/drug_pimecrolimus/pd_Nagao_2013_ABCA1_mediated_cholesterol_efflux.md) | ABCA1-mediated cholesterol efflux ← pimecrolimus · inhibition effect | — | Nagao K et al., Cyclosporine A and PSC833 inhibit ABCA1…, Biochimica et biophysica ac… (2013) | [10.1016/j.bbalip.2012.11.002](https://doi.org/10.1016/j.bbalip.2012.11.002) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Prucha_2013_AE](drugs/drug_pimecrolimus/pd_Prucha_2013_AE.md) | Atopic eczema ← pimecrolimus · model not identified | — | Prucha H et al., Pimecrolimus, a topical calcineurin inh…, Expert opinion on drug meta… (2013) | [10.1517/17425255.2013.819343](https://doi.org/10.1517/17425255.2013.819343) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shi_2021_hCES2A](drugs/drug_pimecrolimus/pd_Shi_2021_hCES2A.md) | hCES2A inhibition ← pimecrolimus · inhibition effect | — | Shi CC et al., Rapalogues as hCES2A Inhibitors: In Vit…, European journal of drug me… (2021) | [10.1007/s13318-020-00659-9](https://doi.org/10.1007/s13318-020-00659-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pimecrolimus) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FKBP1A (potentiator), MTOR (potentiator), PPP3CA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chang_2017 | not_relevant | 2 | 8 | The study reports associations between genotypes and treatment use/outcomes (efficacy), not direct pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, receptor binding) of pimecrolimus. |
| popPK | Federico_2024 | irrelevant | 0 | 0 | The paper is a systems biology and network analysis study for drug discovery in atopic dermatitis; it does not contain any pharmacokinetic modeling or quantitative disposition parameters for pimecrolimus. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | This is a computational machine learning paper on drug-target affinity prediction and contains no pharmacokinetic data for pimecrolimus. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a review of topical corticosteroids for eczema and does not study pimecrolimus or report pharmacokinetic parameters. |
| popPK | Popp_2021 | irrelevant | 0 | 0 | The paper is a review of antibiotics for COVID-19 and contains no pharmacokinetic data for pimecrolimus. |
| PGx | Rappersberger_2002 | not_relevant | 0 | 0 | The paper reports clinical efficacy and PK data for oral pimecrolimus in psoriasis, but it does not report on specific gene variants/genotypes or how they alter PK/PD parameters. |
| PGx | Zollinger_2006 | not_relevant | 0 | 0 | The paper describes standard PK properties in healthy volunteers without investigating the influence of gene variants on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
