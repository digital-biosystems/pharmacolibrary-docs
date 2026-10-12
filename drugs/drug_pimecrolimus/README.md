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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.85).">in vitro</span> | [Nagao_2013_ABCA1_mediated_cholesterol_efflux](drugs/drug_pimecrolimus/pd_Nagao_2013_ABCA1_mediated_cholesterol_efflux.md) | ABCA1-mediated cholesterol efflux ← pimecrolimus · inhibition effect | — | Nagao K et al., Cyclosporine A and PSC833 inhibit ABCA1…, Biochimica et biophysica ac… (2013) | [10.1016/j.bbalip.2012.11.002](https://doi.org/10.1016/j.bbalip.2012.11.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Prucha_2013_AE](drugs/drug_pimecrolimus/pd_Prucha_2013_AE.md) | Atopic eczema ← pimecrolimus · model not identified | — | Prucha H et al., Pimecrolimus, a topical calcineurin inh…, Expert opinion on drug meta… (2013) | [10.1517/17425255.2013.819343](https://doi.org/10.1517/17425255.2013.819343) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Shi_2021_hCES2A](drugs/drug_pimecrolimus/pd_Shi_2021_hCES2A.md) | hCES2A inhibition ← pimecrolimus · inhibition effect | — | Shi CC et al., Rapalogues as hCES2A Inhibitors: In Vit…, European journal of drug me… (2021) | [10.1007/s13318-020-00659-9](https://doi.org/10.1007/s13318-020-00659-9) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
