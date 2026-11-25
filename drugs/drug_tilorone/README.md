<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tilorone&quot;}]"></div>

# tilorone

- **generic name:** tilorone
- **ATC codes:** `J05AX19`
- **DrugBank:** [DB17965](https://go.drugbank.com/drugs/DB17965) · **PubChem:** none
- **molar mass:** 410.558 g/mol (C25H34N2O3) — DrugBank
- **groups:** experimental

## About

Tilorone is a direct-acting antiviral agent and interferon inducer used to treat viral infections. It is given by mouth, as it is orally active. This experimental compound is currently used in some regions where strict clinical trial requirements are not applied.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2028068](https://www.wikidata.org/wiki/Q2028068), [Wikipedia](https://en.wikipedia.org/wiki/Tilorone?oldid=1329520815) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2020_CPE](drugs/drug_tilorone/pd_Yang_2020_CPE.md) | cytopathic effects ← Tilorone (dihydrochloride) · inhibition effect | — | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2020_nucleocapsid_proteins](drugs/drug_tilorone/pd_Yang_2020_nucleocapsid_proteins.md) | nucleocapsid proteins ← Tilorone (dihydrochloride) · inhibition effect | — | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:50 | 0:03 | 0/0/0 | 0/2/0 | 0/0/0 | 4,274/169 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anantpadma_2019 | irrelevant | 0 | 0 | This is an in vitro antiviral drug-screening/machine-learning study; tilorone is only a test compound with EC50 values, no PK disposition parameters. |
| popPK | Briggs_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic activity of tilorone as a nicotinic acetylcholine receptor agonist in vitro, not on pharmacokinetic disposition parameters. |
| PGx | Briggs_2008 | not_relevant | 0 | 0 | The paper characterizes the pharmacological activity of tilorone as an alpha7 nAChR agonist but does not report any pharmacogenomic effects (gene variant impacts) on PK or PD parameters. |
| popPK | Hamburg_1978 | irrelevant | 0 | 0 | This is a macrophage phagocytosis/interferon-induction study in mice; tilorone is only a co-administered inducer with no PK disposition parameters reported. |
| popPK | Handrock_1992 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of lysosomal storage of glycosaminoglycans by acridine derivatives, not a pharmacokinetic study reporting disposition parameters for tilorone. |
| PGx | Handrock_1992 | not_relevant | 0 | 0 | The paper investigates the toxicological mechanism of lysosomal storage in cultured cells and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Lüllmann-Rauch_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation into lysosomal side effects (GAG storage and enzyme release) in bovine fibroblasts, reporting no pharmacokinetic parameters. |
| PGx | Lüllmann-Rauch_1995 | not_relevant | 0 | 0 | The study examines the mechanism of a drug side effect (lysosomal storage) in cultured cells and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | This is an in-vitro antiviral screening study reporting EC50 values, not a pharmacokinetic study with disposition parameters. |
| PGx | Yang_2020 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity of tilorone against coronaviruses, but does not mention any pharmacogenomic variants or their effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btilorone%5D&body=Drug%3A%20tilorone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tilorone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
