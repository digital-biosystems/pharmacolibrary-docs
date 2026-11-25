<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;secobarbital&quot;}]"></div>

# secobarbital

- **generic name:** secobarbital
- **ATC codes:** `N05CA06`
- **DrugBank:** [DB00418](https://go.drugbank.com/drugs/DB00418) · **PubChem:** [CID 5193](https://pubchem.ncbi.nlm.nih.gov/compound/5193)
- **molar mass:** 238.2829 g/mol (C12H18N2O3) — DrugBank
- **groups:** approved, vet_approved

## About

Secobarbital is a short-acting barbiturate used to treat insomnia. It is administered orally in capsule form. Once widely used, it is now considered obsolete and has been largely replaced by other medications.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q414788](https://www.wikidata.org/wiki/Q414788), [Wikipedia](https://en.wikipedia.org/wiki/Secobarbital?oldid=1382466165) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wong_1984_36Cl_efflux](drugs/drug_secobarbital/pd_Wong_1984_36Cl_efflux.md) | 36Cl- efflux ← secobarbital · direct Emax (saturable) effect | — | Wong EH et al., gamma-Aminobutyric acid activation of 3…, Brain research (1984) | [10.1016/0006-8993(84)91213-7](https://doi.org/10.1016/0006-8993(84)91213-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:39 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 3,823/189 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hartley_1989.pdf` | Hartley DM et al., Delayed rescue of N-methyl-D-aspartate…, The Journal of pharmacology… (1989) | pd | 5 |  | [2569534](https://www.ncbi.nlm.nih.gov/pubmed/2569534) | metadata signals extractable PD data (EC50) |
| `Wong_1984.pdf` | Wong EH et al., gamma-Aminobutyric acid activation of 3…, Brain research (1984) | pd | 4 | [10.1016/0006-8993(84)91213-7](https://doi.org/10.1016/0006-8993(84)91213-7) | [6331574](https://www.ncbi.nlm.nih.gov/pubmed/6331574) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 05:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_1994 | irrelevant | 1 | 0 | The study focuses on warfarin pharmacokinetics and pharmacodynamics, where secobarbital is used only as a metabolic enzyme inducer/co-administered drug rather than the subject drug. |
| PGx | Chan_1994 | not_relevant | 0 | 0 | The paper investigates warfarin pharmacokinetics/pharmacodynamics, and does not report a pharmacogenomic effect on a PK/PD parameter for secobarbital. |
| popPK | Hartley_1989 | irrelevant | 0 | 0 | The paper is an in-vitro neuroprotection study where secobarbital is used only as a negative control agent, not as a subject for pharmacokinetic parameter estimation. |
| PGx | Hartley_1989 | not_relevant | 0 | 0 | The paper does not report any pharmacogenomic effect on secobarbital's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Login_1998 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of GABA receptor action on acetylcholine release in rat striatal slices, where secobarbital is used only as a modulator, not as the subject drug for PK parameter measurement. |
| PGx | Login_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of muscimol and secobarbital in rat striatal slices regarding acetylcholine release and does not involve human pharmacogenomics or genetic variants. |
| popPK | Sakuma_1999 | irrelevant | 0 | 0 | The study focuses on the induction of CYP1A2 expression by barbiturates in mice and does not report pharmacokinetic parameters for secobarbital. |
| PGx | Sakuma_1999 | not_relevant | 1 | 2 | The paper studies the induction of CYP1A2 by secobarbital as an inducer, not the effect of a genetic variant on the PK/PD of secobarbital. |
| popPK | Verpooten_1982 | relevant | 8 | 0 | The paper reports that a two-compartment model was accepted for secobarbital in a clinical study, but no specific numeric PK parameters (CL, V, etc.) are present in the provided evidence. |
| PGx | Verpooten_1982 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of secobarbital in the context of hemoperfusion and hemodialysis in severe poisoning, but does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| popPK | Wong_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology investigation of chloride ion flux and GABA receptor interactions, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Wong_1984 | not_relevant | 0 | 0 | The study describes the pharmacodynamic effect of secobarbital on GABA receptors in a rat model but does not investigate any genetic variants or genotypes. |
| popPK | Yost_1993 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study examining the mechanism of action (inhibition of nAChR) of secobarbital, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Yost_1993 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of secobarbital on nicotinic acetylcholine receptors in an *in vitro* oocyte model using site-directed mutagenesis, rather than reporting human pharmacogenomic effects on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsecobarbital%5D&body=Drug%3A%20secobarbital%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_secobarbital/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
