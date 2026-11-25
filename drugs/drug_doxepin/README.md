<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;doxepin&quot;}]"></div>

# doxepin

- **generic name:** doxepin
- **ATC codes:** `D04AX01`, `N06AA12`
- **DrugBank:** [DB01142](https://go.drugbank.com/drugs/DB01142) · **PubChem:** [CID 667468](https://pubchem.ncbi.nlm.nih.gov/compound/667468)
- **molar mass:** 279.3761 g/mol (C19H21NO) — DrugBank
- **groups:** approved

## About

Doxepin is a tricyclic antidepressant used for depression, anxiety, chronic hives, and sleep difficulties. It is given by mouth as a pill or capsule. A topical cream is also available for skin itching. The medication is available as a generic in the United States and is widely prescribed.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q71704041](https://www.wikidata.org/wiki/Q71704041), [Wikipedia](https://en.wikipedia.org/wiki/Doxepin?oldid=1382080953) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doxepin | parent | 279.376 | C19H21NO | DrugBank | [667468](https://pubchem.ncbi.nlm.nih.gov/compound/667468) | Kirchheiner_2002 |
| E-doxepin | metabolite | 279.383 | C19H21NO | PubChem | [667477](https://pubchem.ncbi.nlm.nih.gov/compound/667477) | Kirchheiner_2002 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Kirchheiner_2002_reference](drugs/drug_doxepin/Doxepin_Kirchheiner2002_reference.md) | — | parent + metabolite (no model) | 3 | Kirchheiner J et al., Contributions of CYP2D6, CYP2C9 and CYP…, Pharmacogenetics (2002) | [10.1097/00008571-200210000-00010](https://doi.org/10.1097/00008571-200210000-00010) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2019_Kv_currents](drugs/drug_doxepin/pd_Li_2019_Kv_currents.md) | voltage-dependent K+ currents ← doxepin · direct sigmoid Emax (Hill) effect | — | Li H et al., Inhibitory Effect of Tricyclic Antidepr…, Cardiovascular toxicology (2019) | [10.1007/s12012-019-09519-8](https://doi.org/10.1007/s12012-019-09519-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Meyer_2012_cAMP](drugs/drug_doxepin/pd_Meyer_2012_cAMP.md) | cAMP accumulation ← doxepin · inhibition effect | — | Meyer JM et al., A "genome-to-lead" approach for insecti…, PLoS neglected tropical dis… (2012) | [10.1371/journal.pntd.0001478](https://doi.org/10.1371/journal.pntd.0001478) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Meyer_2012_cAMP_2](drugs/drug_doxepin/pd_Meyer_2012_cAMP_2.md) | cAMP accumulation ← doxepin · inhibition effect | — | Meyer JM et al., A "genome-to-lead" approach for insecti…, PLoS neglected tropical dis… (2012) | [10.1371/journal.pntd.0001478](https://doi.org/10.1371/journal.pntd.0001478) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:31 | 0:03 | 0/1/0 | 3/0/0 | 0/0/0 | 3,239/155 | einfracz / qwen3.8-27b | 15 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Claro_1986 | irrelevant | 0 | 0 | The study is an in vitro mechanistic receptor binding/phosphoinositide assay where doxepin is used as a pharmacological antagonist, not a PK study. |
| PGx | Claro_1986 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding and pharmacological data for doxepin, not a pharmacogenomic effect on a PK or PD parameter in humans. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study reports pharmacological mechanism (K+ channel inhibition) and IC50 values, not population pharmacokinetic parameters like clearance or volume. |
| PGx | Li_2019 | not_relevant | 0 | 0 | The paper investigates the direct pharmacodynamic effect of doxepin on Kv channels in rabbit cells and does not report any gene variant or genotype. |
| popPK | Meyer-Barner_2002 | relevant | 10 | 3 | The study reports a population PK model for doxepin, but the specific numeric parameter estimates (CL/F, V/F values) are not present in the provided abstract/text evidence. |
| PGx | Meyer-Barner_2002 | not_relevant | 0 | 0 | The study investigates demographic covariates (age, weight) and drug interactions but does not report any gene variant, genotype, or phenotype effects on PK parameters. |
| popPK | Meyer_2012 | irrelevant | 0 | 0 | The paper reports doxepin receptor activity and mosquito toxicity, but no pharmacokinetic disposition parameters. |
| popPK | Mochizuki_2004 | irrelevant | 0 | 0 | The study is a PET imaging study focusing on histamine H1 receptor quantification, not a pharmacokinetic study reporting disposition parameters for doxepin. |
| PGx | Mochizuki_2004 | not_relevant | 0 | 0 | The study focuses on PET modeling of doxepin as a radioligand to measure histamine receptors, not on pharmacogenomic effects on doxepin's PK/PD. |
| popPK | Mochizuki_2004_2 | irrelevant | 4 | 0 | The study focuses on receptor binding (distribution volume/DV) using a two-compartment model, which is a compartmental model, but it lacks explicit quantitative disposition parameters like CL or V, and no numeric values are provided in the text. |
| PGx | Mochizuki_2004_2 | not_relevant | 0 | 0 | The study focuses on developing a PET imaging method for histamine H1 receptors and does not investigate genetic variants or their effects on doxepin pharmacokinetics or pharmacodynamics. |
| popPK | Pancrazio_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of sodium channel inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Pancrazio_1998 | not_relevant | 0 | 0 | The study investigates the mechanism of action of doxepin on neuronal sodium channels in an in vitro setting, not the effect of genetic variants on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yan_2002_2 | relevant | 10 | 2 | The paper reports pharmacokinetic parameters (Vd, half-life, clearance, absorption fraction) for doxepin in humans, but the specific numeric values for volume and clearance are described qualitatively (e.g., "large", "short") rather than listed in the provided text. |
| PGx | Yan_2002_2 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of doxepin in healthy volunteers but does not report any genetic variants or genotypes affecting PK parameters. |
| popPK | Yanai_1991 | irrelevant | 0 | 0 | Doxepin is used as a PET tracer for H1-receptor imaging, not as the subject of a pharmacokinetic study reporting disposition parameters. |
| PGx | Yanai_1991 | not_relevant | 0 | 0 | The paper uses doxepin as a PET tracer for histamine H1-receptor imaging and does not report pharmacogenomic effects on its PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxepin%5D&body=Drug%3A%20doxepin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doxepin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:29 UTC</sub>
