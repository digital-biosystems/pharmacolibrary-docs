<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;prochlorperazine&quot;}]"></div>

# prochlorperazine

- **generic name:** prochlorperazine
- **ATC codes:** `N05AB04`
- **DrugBank:** [DB00433](https://go.drugbank.com/drugs/DB00433) · **PubChem:** [CID 4917](https://pubchem.ncbi.nlm.nih.gov/compound/4917)
- **molar mass:** 373.943 g/mol (C20H24ClN3S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Prochlorperazine is a phenothiazine antipsychotic used to treat conditions such as schizophrenia, psychosis, nausea, and anxiety. It is administered orally, intramuscularly, intravenously, or rectally, with good oral absorption. It is widely used as a generic medication in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2359690](https://www.wikidata.org/wiki/Q2359690), [Wikipedia](https://en.wikipedia.org/wiki/Prochlorperazine?oldid=1373298496) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otręba_2018_cell_viability](drugs/drug_prochlorperazine/pd_Otr_ba_2018_cell_viability.md) | cell viability ← prochlorperazine · direct Emax (saturable) effect | — | Otręba M et al., Perphenazine and prochlorperazine induc…, Die Pharmazie (2018) | [10.1691/ph.2018.7806](https://doi.org/10.1691/ph.2018.7806) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:29 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 4,321/176 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Avram_2009 | relevant | 9 | 1 | The study describes a compartmental PK model for prochlorperazine in humans, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| PGx | Avram_2009 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics and bioavailability of prochlorperazine via inhalation in healthy volunteers and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Berg_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetics for rebeccamycin (NSC 655649), while prochlorperazine is mentioned only as a drug administered to treat side effects. |
| PGx | Berg_2004 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of rebeccamycin in nonhuman primates and mentions prochlorperazine only as a treatment for adverse effects, not as the subject of pharmacogenomic analysis. |
| popPK | Otręba_2017 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of prochlorperazine binding to melanin and its effects on melanocyte viability and oxidative stress, reporting no pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Otręba_2017 | not_relevant | 0 | 0 | The paper investigates the interaction between prochlorperazine and melanin/melanocytes, focusing on binding constants and cellular effects, but does not report any pharmacogenomic analysis or effects of genetic variants on PK/PD parameters. |
| popPK | Otręba_2018 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay measuring cell viability and EC50, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Otręba_2018 | not_relevant | 0 | 0 | The paper investigates the cytotoxic effects of prochlorperazine on glioblastoma cells and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Otręba_2018_2 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of melanogenesis and cell viability, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Otręba_2018_2 | not_relevant | 0 | 0 | The paper reports in vitro drug effects on melanocytes without any genetic variation or pharmacogenomic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprochlorperazine%5D&body=Drug%3A%20prochlorperazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_prochlorperazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
