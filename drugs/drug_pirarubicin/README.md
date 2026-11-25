<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;pirarubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pirarubicin_Robert1988_reference&quot;,&quot;label&quot;:&quot;Robert_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# pirarubicin

- **generic name:** pirarubicin
- **ATC codes:** `L01DB08`
- **DrugBank:** [DB11616](https://go.drugbank.com/drugs/DB11616) · **PubChem:** [CID 11296583](https://pubchem.ncbi.nlm.nih.gov/compound/11296583)
- **molar mass:** 627.643 g/mol (C32H37NO12) — DrugBank
- **groups:** investigational

## About

Pirarubicin is an anthracycline antineoplastic antibiotic used to treat cancer. It is currently classified as an investigational drug.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q76416926](https://www.wikidata.org/wiki/Q76416926), [Wikipedia](https://en.wikipedia.org/wiki/Pirarubicin?oldid=1329519053) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pirarubicin (THP-ADM (pirarubicin)) | parent | 627.643 | C32H37NO12 | DrugBank | [11296583](https://pubchem.ncbi.nlm.nih.gov/compound/11296583) | Mader_1995, Robert_1988 |

## Start here

> **Robert_1988_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> patients with advanced cancer, n = 6. [Run it in the simulator](drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md?tab=Simulation) · [record](drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Robert_1988_reference](drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Robert J et al., Pharmacokinetics and metabolism of pira…, European journal of cancer… (1988) | [10.1016/0277-5379(88)90217-9](https://doi.org/10.1016/0277-5379(88)90217-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q189 — no SI value to build from</sub> | [Mader_1995_reference](drugs/drug_pirarubicin/Pirarubicin_Mader1995_reference.md) | — | 1-compartment (no model) | 4 | Mader RM et al., Pharmacokinetics of 4'-O-tetrahydropyra…, Cancer chemotherapy and pha… (1995) | [10.1007/BF00685634](https://doi.org/10.1007/BF00685634) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Leca_1998_WBC](drugs/drug_pirarubicin/pd_Leca_1998_WBC.md) | white blood cells (WBC) ← pirarubicin · direct linear effect | — | Leca FR et al., Pharmacokinetic-pharmacodynamic relatio…, Anti-cancer drugs (1998) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:40 | 0:03 | 2/0/0 | 1/0/0 | 0/0/0 | 4,364/162 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kubota_2001 | irrelevant | 0 | 0 | The paper is a mechanistic review of drug resistance mechanisms (P-gp, MRP, LRP) and does not report any quantitative pharmacokinetic parameters for pirarubicin. |
| PGx | Kubota_2001 | not_relevant | 2 | 0 | The paper discusses general resistance mechanisms (P-gp, MRP) in cancer cells but does not report clinical pharmacogenomic data linking specific human genotypes to pirarubicin PK or PD parameters. |
| popPK | Leca_1998 | irrelevant | 3 | 0 | The study reports a pharmacodynamic predictive model for toxicity using a single-timepoint AUC estimate, but does not report standard quantitative disposition parameters (CL, V, ka) or a compartmental model for pirarubicin. |
| PGx | Leca_1998 | not_relevant | 0 | 0 | The study evaluates pharmacokinetic-pharmacodynamic relationships for hematological toxicity without examining any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Lin_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of multidrug resistance in cell lines where pirarubicin is only used as a probe drug to test resistance, with no pharmacokinetic modeling or disposition parameters reported. |
| PGx | Lin_2020 | not_relevant | 0 | 0 | The paper investigates the reversal of multidrug resistance by a natural extract in cell lines, not the effect of a specific human gene variant/genotype on pirarubicin's PK or PD parameters. |
| popPK | Mader_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 4'-O-tetrahydropyranyladriamycin (THP-ADM), a prodrug, not pirarubicin. |
| PGx | Mader_1995 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics of pirarubicin but does not investigate or report any gene variants or genotypes affecting PK or PD parameters. |
| popPK | Marbeuf-Gueye_1998 | irrelevant | 0 | 0 | The study focuses on in-vitro cellular efflux kinetics of anthracyclines (including pirarubicin) and does not report in-vivo population or systemic pharmacokinetic parameters (CL, V, T1/2). |
| PGx | Marbeuf-Gueye_1998 | not_relevant | 1 | 1 | The study examines transporter kinetics in cancer cell lines and mentions pirarubicin, but does not report pharmacogenomic effects on patient PK or PD parameters. |
| popPK | Meesungnoen_2002 | irrelevant | 1 | 0 | The study is in-vitro mechanistic research on P-glycoprotein-mediated efflux in K562 cells, reporting kinetic parameters (Vmax, Km) rather than population pharmacokinetic disposition parameters. |
| PGx | Meesungnoen_2002 | not_relevant | 0 | 0 | The study investigates drug resistance mechanisms in cell lines rather than a specific human genetic variant affecting pharmacokinetics or pharmacodynamics in vivo. |
| PGx | Robert_1988 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetics and metabolism in a small patient cohort but does not report any gene variant or pharmacogenomic effect on PK/PD parameters. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | WT1 genotype is associated with pathologic response to a combination regimen, but the paper reports no pirarubicin-specific PK or PD parameter. |
| popPK | Zhou_2018 | irrelevant | 0 | 0 | The study is a pharmacogenomic analysis focusing on tumor recurrence risk and does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for pirarubicin. |
| PGx | Zhou_2018 | not_relevant | 0 | 0 | The study reports an association with clinical recurrence risk (efficacy), not changes in a pharmacokinetic or pharmacodynamic parameter of pirarubicin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpirarubicin%5D&body=Drug%3A%20pirarubicin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pirarubicin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:40 UTC</sub>
