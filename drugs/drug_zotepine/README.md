<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;zotepine&quot;}]"></div>

# zotepine

- **generic name:** zotepine
- **ATC codes:** `N05AX11`
- **DrugBank:** [DB09225](https://go.drugbank.com/drugs/DB09225) · **PubChem:** [CID 5736](https://pubchem.ncbi.nlm.nih.gov/compound/5736)
- **molar mass:** 331.86 g/mol (C18H18ClNOS) — DrugBank
- **groups:** approved, withdrawn

## About

Zotepine is an atypical antipsychotic medication used to treat schizophrenia. It is administered orally, typically as a tablet. The drug has been discontinued in Germany and remains unavailable in several major markets, including the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q226905](https://www.wikidata.org/wiki/Q226905), [Wikipedia](https://en.wikipedia.org/wiki/Zotepine?oldid=1374201974) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhuang_2025_Kv_currents](drugs/drug_zotepine/pd_Zhuang_2025_Kv_currents.md) | Kv currents ← Zotepine · direct sigmoid Emax (Hill) effect | — | Zhuang W et al., Blockade of Voltage-Gated K, Journal of applied toxicolo… (2025) | [10.1002/jat.4740](https://doi.org/10.1002/jat.4740) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 08:30 | 0:11 | 0/0/0 | 1/0/0 | 0/0/0 | 5,856/1,586 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Davis_2003 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy trials for schizophrenia and does not report any pharmacokinetic parameters for zotepine. |
| PGx | Davis_2003 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy trials comparing antipsychotics and does not report pharmacogenomic effects or PK/PD parameters influenced by gene variants. |
| popPK | Furukawa_2026 | irrelevant | 0 | 0 | This is a dose-response efficacy meta-analysis of antipsychotics; zotepine had no usable data and no PK parameters (CL, V, ka, half-life) are reported anywhere. |
| popPK | Leucht_2015 | irrelevant | 0 | 0 | The paper is a review of dose equivalents for antipsychotics and does not report pharmacokinetic parameters (CL, V, t1/2) for zotepine. |
| PGx | Leucht_2015 | not_relevant | 0 | 0 | The paper discusses dose equivalency calculations for antipsychotics using clinical trial data and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Siafis_2023 | irrelevant | 0 | 0 | This is a dose-response meta-analysis of EPS risk, not a PK study; zotepine is only one of many antipsychotics and no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The paper is a systematic review on antipsychotic-induced akathisia risk, not a pharmacokinetic study, and explicitly states that no data was obtained for zotepine. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper is a dose-response meta-analysis of akathisia risk for various antipsychotics and explicitly states that no data was obtained for zotepine; it does not report pharmacogenomic effects. |
| popPK | Zhuang_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on voltage-gated potassium channels in rabbit cells, not a pharmacokinetic study. |
| PGx | Zhuang_2025 | not_relevant | 0 | 0 | The paper investigates the direct electrophysiological effect of zotepine on potassium channels in animal tissue, not the influence of a gene variant on its pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzotepine%5D&body=Drug%3A%20zotepine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zotepine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
