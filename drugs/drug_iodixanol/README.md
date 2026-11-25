<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iodixanol&quot;}]"></div>

# iodixanol

- **generic name:** iodixanol
- **ATC codes:** `V08AB09`
- **DrugBank:** [DB01249](https://go.drugbank.com/drugs/DB01249) · **PubChem:** [CID 3724](https://pubchem.ncbi.nlm.nih.gov/compound/3724)
- **molar mass:** 1550.1819 g/mol (C35H44I6N6O15) — DrugBank
- **groups:** approved

## About

Iodixanol is a non-ionic iodinated radiocontrast agent used for imaging. It is given as an injection by intra-arterial, intravenous, intrathecal, or intravascular routes. It is an approved medication available as a generic.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2419291](https://www.wikidata.org/wiki/Q2419291), [Wikipedia](https://en.wikipedia.org/wiki/Iodixanol?oldid=1365021466) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iodixanol | parent | 1550.18 | C35H44I6N6O15 | DrugBank | [3724](https://pubchem.ncbi.nlm.nih.gov/compound/3724) | Nossen_1995 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Nossen_1995_reference](drugs/drug_iodixanol/Iodixanol_Nossen1995_reference.md) | — | 1-compartment (no model) | 5 | Nossen JO et al., Elimination of the non-ionic X-ray cont…, Scandinavian journal of cli… (1995) | [10.3109/00365519509104972](https://doi.org/10.3109/00365519509104972) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:28 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 4,029/175 | einfracz / qwen3.8-27b | 6 | 0/3 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eide_2026 | relevant | 7 | 1 | The study reports a population pharmacokinetic model for iodixanol, but the specific numeric parameter values (CL, V, Ka, etc.) are referenced in tables and figures not fully provided in the evidence. |
| PGx | Eide_2026 | not_relevant | 0 | 0 | The study evaluates pharmacokinetics in a population context and correlates clearance with demographic/imaging variables, but it does not report any specific effect of a gene variant or genotype on the PK parameters of iodixanol. |
| popPK | Erdogan_2003 | irrelevant | 1 | 0 | The paper is a clinical review focusing on the nephrotoxicity (renal safety) of iodixanol and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| PGx | Erdogan_2003 | not_relevant | 0 | 0 | The paper discusses the clinical efficacy of iodixanol in preventing nephropathy and contains no information on pharmacogenomics, gene variants, or their effect on PK/PD. |
| popPK | Falkenberg-Jensen_2016 | irrelevant | 0 | 0 | This is a diagnostic imaging feasibility study using iodixanol as a local contrast medium in rabbits and human cadavers, not a pharmacokinetic study reporting systemic disposition parameters. |
| PGx | Falkenberg-Jensen_2016 | not_relevant | 0 | 0 | The paper is a feasibility study on using iodixanol for CT imaging of the Eustachian tube in animals and cadavers, containing no pharmacogenomic analysis or PK/PD parameter measurements related to gene variants. |
| popPK | Joshi-Barr_2013 | irrelevant | 0 | 0 | Iodixanol is used as a density modifier in tissue engineering scaffolds, not as the subject of a pharmacokinetic study. |
| PGx | Joshi-Barr_2013 | not_relevant | 0 | 0 | The paper discusses using iodixanol as a density modifier in a tissue engineering protocol, not as a drug subject to pharmacogenomic analysis. |
| popPK | Lenhard_2013 | irrelevant | 2 | 0 | The study reports qualitative CT attenuation trends and qualitative renal oxygenation/viscosity changes, but does not provide quantitative pharmacokinetic parameters (e.g., clearance, volume) for iodixanol. |
| PGx | Lenhard_2013 | not_relevant | 0 | 0 | The paper investigates the physicochemical properties (osmolality) of iodixanol and its effects on renal kinetics and oxygenation in rats, but does not report any gene variants, genotypes, or phenotypes influencing these parameters. |
| popPK | Li_2012 | irrelevant | 1 | 0 | The study focuses on the physiological effect of iodixanol on renal oxygenation using MRI as a diagnostic tool, not on pharmacokinetic parameters (clearance, volume, etc.). |
| PGx | Li_2012 | not_relevant | 0 | 0 | The study is a preclinical animal model investigating the effects of physical properties (viscosity/osmolality) and dose on renal oxygenation, with no assessment of genetic variants or pharmacogenomic effects. |
| PGx | Nossen_1995 | not_relevant | 0 | 0 | The study reports pharmacokinetics in patients with renal impairment but does not involve genetic variants or pharmacogenomics. |
| popPK | Prionas_2011 | irrelevant | 0 | 0 | The study is an imaging physics/optimization study using iodixanol as a contrast medium to measure attenuation coefficients, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Prionas_2011 | not_relevant | 0 | 0 | The study focuses on optimizing breast CT imaging parameters using iodixanol as a phantom material, with no mention of pharmacogenomics or gene variants. |
| popPK | Saade_2021 | irrelevant | 0 | 0 | The study is an in-vitro phantom imaging study assessing image reconstruction quality, not a pharmacokinetic study. |
| PGx | Saade_2021 | not_relevant | 0 | 0 | The study investigates imaging quality and iodine concentration in phantoms, not pharmacokinetic or pharmacodynamic effects of gene variants in humans. |
| popPK | Van_2019 | irrelevant | 0 | 0 | The study investigates radiation-induced DNA damage in minipigs using iodixanol as a diagnostic contrast agent, without reporting any pharmacokinetic parameters (CL, V, t1/2, etc.) for the drug itself. |
| PGx | Van_2019 | not_relevant | 0 | 0 | The study investigates the effect of iodine dose on radiation-induced DNA damage in minipigs, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of iodixanol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biodixanol%5D&body=Drug%3A%20iodixanol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iodixanol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 00:26 UTC</sub>
