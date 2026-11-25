<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08D&quot;,&quot;href&quot;:&quot;atc/V08D.md&quot;},{&quot;label&quot;:&quot;perflenapent&quot;}]"></div>

# perflenapent

- **generic name:** perflenapent
- **ATC codes:** `V08DA03`
- **DrugBank:** [DB11625](https://go.drugbank.com/drugs/DB11625) · **PubChem:** none
- **molar mass:** 288.036 g/mol (C5F12) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Perflenapent is an ultrasound contrast medium used for echocardiography. It is administered as an emulsion to create microbubbles for imaging. The drug has been withdrawn from the European Union market.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7168152](https://www.wikidata.org/wiki/Q7168152), [Wikipedia](https://en.wikipedia.org/wiki/Perfluoropentane?oldid=1380007705) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| perflenapent | parent | 288.036 | C5F12 | DrugBank | — | Correas_2001 |
| dodecafluoropentane (DDFP; perflenapent) | metabolite | 288.031 | C5F12 | PubChem | [12675](https://pubchem.ncbi.nlm.nih.gov/compound/12675) | Correas_2001 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Correas_2001_reference](drugs/drug_perflenapent/Perflenapent_Correas2001_reference.md) | — | 1-compartment (no model) | 0 | Correas JM et al., Human pharmacokinetics of a perfluoroca…, Ultrasound in medicine & bi… (2001) | [10.1016/s0301-5629(00)00363-x](https://doi.org/10.1016/s0301-5629(00)00363-x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:28 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 3,729/184 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arthur_2017 | irrelevant | 0 | 0 | The study focuses on the neurological effects of dodecafluoropentane (DDFPe) in a rabbit stroke model and does not report pharmacokinetic parameters for perflenapent. |
| PGx | Arthur_2017 | not_relevant | 0 | 0 | The study investigates the efficacy of dodecafluoropentane in a rabbit stroke model and does not involve perflenapent or any pharmacogenomic analysis. |
| popPK | Correas_2001 | irrelevant | 0 | 0 | The study evaluates dodecafluoropentane (DDFP), not perflenapent, which is a completely different drug. |
| PGx | Correas_2001 | not_relevant | 0 | 0 | The study reports standard human pharmacokinetics of dodecafluoropentane (a perfluorocarbon) but does not investigate any gene variants or genotypes. |
| popPK | Mosier_2023 | irrelevant | 1 | 0 | The mouse study reports oxygenation and lung-injury outcomes, not quantitative pharmacokinetic disposition parameters. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The paper investigates the use of dodecafluoropentane (perflenapent) as a submucosal lifting agent for endoscopy, not its pharmacokinetic disposition parameters. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The paper describes a physical mechanism (thermoresponsive aerification) of dodecafluoropentane (a perfluorocarbon liquid, distinct from perflenapant) for endoscopic procedures and does not investigate any pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Waqar_2022 | irrelevant | 0 | 0 | The paper focuses on the synthesis and characterization of magnetic microbubbles for imaging (US/MRI), not the pharmacokinetics of the drug perflenapent. |
| PGx | Waqar_2022 | not_relevant | 0 | 0 | The paper describes the synthesis of magnetic microbubbles for imaging, not a pharmacogenomic study of perflenapent. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperflenapent%5D&body=Drug%3A%20perflenapent%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_perflenapent/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:28 UTC</sub>
