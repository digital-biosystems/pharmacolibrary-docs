<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09A&quot;,&quot;href&quot;:&quot;atc/V09A.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) exametazime&quot;}]"></div>

# technetium (99mTc) exametazime

- **generic name:** technetium (99mTc) exametazime
- **ATC codes:** `V09AA01`
- **DrugBank:** [DB09163](https://go.drugbank.com/drugs/DB09163) · **PubChem:** none
- **groups:** approved

## About

Technetium (99mTc) exametazime is a diagnostic radiopharmaceutical used to detect altered blood flow in the brain for stroke and other cerebrovascular diseases. It is administered as an intravenous injection. The drug is approved and used by nuclear medicine physicians.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7692225](https://www.wikidata.org/wiki/Q7692225), [Wikipedia](https://en.wikipedia.org/wiki/Technetium_(99mTc)_exametazime?oldid=1330526558) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydrophilic HM-PAO | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Lassen_1988_reference](drugs/drug_technetium_99mtc_exametazime/Technetium99mtcExametazime_Lassen1988_reference.md) | — | parent + metabolite (no model) | 4 | Lassen NA et al., The retention of [99mTc]-d,l-HM-PAO in…, Journal of cerebral blood f… (1988) | [10.1038/jcbfm.1988.28](https://doi.org/10.1038/jcbfm.1988.28) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:15 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 4,608/193 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 67 matched, 20 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Algotsson_1993 | irrelevant | 0 | 0 | The study uses 99mTc-HMPAO (not exametazime) as a diagnostic imaging agent to measure cerebral blood flow, rather than studying the pharmacokinetics of technetium-99mTc-exametazime. |
| PGx | Algotsson_1993 | not_relevant | 0 | 0 | The paper uses 99mTc-HMPAO as a tracer for cerebral blood flow measurement in carotid endarterectomy patients and does not investigate pharmacogenomic effects or involve technetium_99mtc_exametazime. |
| popPK | Andersen_1987 | irrelevant | 0 | 0 | The study focuses on 99Tcm-HMPAO as a diagnostic imaging agent for cerebral blood flow, not technetium-99mtc_exametazime, and does not report pharmacokinetic parameters for the subject drug. |
| PGx | Andersen_1987 | not_relevant | 0 | 0 | The paper compares cerebral blood flow tracers and discusses image physics/clearance, but reports no pharmacogenomic effects on PK or PD parameters. |
| popPK | Apostolova_2012 | irrelevant | 1 | 0 | The study focuses on Tc-99m-HMPAO and Tc-99m-ECD (a different tracer, not exametazime), and reports only qualitative uptake patterns and washout times rather than compartmental PK parameters. |
| PGx | Apostolova_2012 | not_relevant | 0 | 0 | The paper studies Tc-99m-HMPAO and Tc-99m-ECD in mice regarding age/gender, not Tc-99m-exametazime, and does not involve genetic variants. |
| popPK | Boswell_2013 | irrelevant | 0 | 0 | The paper studies a different radiopharmaceutical, (99m)Tc-HMPAO (Ceretec), not (99m)Tc-exametazime (NeuroMIDI/Neurolite). |
| PGx | Boswell_2013 | not_relevant | 0 | 0 | The paper studies technetium-99m HMPAO, not exametazime, and does not report pharmacogenomic effects. |
| popPK | Clough_2019 | irrelevant | 1 | 0 | The study focuses on 99mTc-HMPAO (hexamethylpropyleneamine oxime), which is a different radiopharmaceutical from 99mTc-exametazime (ethyl cysteinate dimer). |
| PGx | Clough_2019 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in an animal model without any genotyping or pharmacogenomic analysis of gene variants. |
| popPK | Friberg_1994 | irrelevant | 0 | 0 | The paper studies 99mTc-bicisate (ECD), a different radiopharmaceutical agent, not technetium-99mTc-exametazime. |
| PGx | Friberg_1994 | not_relevant | 0 | 0 | The paper reports the general pharmacokinetics of 99mTc-bicisate in a small clinical cohort but does not investigate or report any association between gene variants and tracer parameters. |
| popPK | Isaka_1994 | irrelevant | 0 | 0 | The paper studies a different radiopharmaceutical (99mTc-HMPAO) for CBF measurement and does not report PK parameters for technetium-99mtc-exametazime. |
| PGx | Isaka_1994 | not_relevant | 0 | 0 | The paper discusses 99mTc-HMPAO as a cerebral blood flow tracer, not 99mTc-exametazime, and reports no pharmacogenomic effects. |
| popPK | Kao_1995 | irrelevant | 0 | 0 | The study measures lung clearance of Tc-99m DTPA and HMPAO, not technetium_99mtc_exametazime. |
| PGx | Kao_1995 | not_relevant | 0 | 0 | The paper studies Tc-99m DTPA and HMPAO aerosols, not technetium_99mtc_exametazime, and reports no genetic effects. |
| popPK | Kothari_2000 | irrelevant | 0 | 0 | The paper studies novel technetium-99m complexes of cysteine-oxime ligands, not the specific drug technetium-99mTc-exametazime, and provides no quantitative PK parameters. |
| PGx | Kothari_2000 | not_relevant | 0 | 0 | The paper does not report any pharmacogenomic effects on the PK/PD of technetium_99mtc_exametazime; it focuses on the synthesis of novel ligands and their biodistribution. |
| popPK | Lassen_1988 | irrelevant | 2 | 10 | This is a PET/SPECT kinetic modeling study focused on the diagnostic imaging parameters (retention, flow) of the radiotracer, not a population pharmacokinetic study reporting standard disposition parameters (CL, Vss) for systemically administered drug clearance. |
| PGx | Lassen_1988 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for the tracer but does not investigate the effect of any gene variant or genotype on these parameters. |
| popPK | Lukawska_2014 | irrelevant | 0 | 0 | The study uses Technetium-99m HMPAO as a diagnostic radiolabel for cell migration, not as a drug for pharmacokinetic analysis, and reports no PK parameters for the tracer itself. |
| PGx | Lukawska_2014 | not_relevant | 0 | 0 | The study examines neutrophil/eosinophil migration kinetics using a different radiotracer and contains no pharmacogenomic analysis or technetium-99m exametazime PK/PD data. |
| popPK | Léveillé_1992 | irrelevant | 6 | 0 | The study compares qualitative imaging characteristics and relative washout/clearance rates between two Tc-99m agents but does not report quantitative PK parameters (CL, V, t1/2) for exametazime (ECD). |
| PGx | Léveillé_1992 | not_relevant | 0 | 0 | The paper compares two different radiotracers (ECD vs HMPAO) in healthy subjects and does not investigate any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Matsuda_1991 | irrelevant | 3 | 2 | The study reports qualitative biodistribution and washout rates (percent/hour) for a SPECT imaging agent, but does not provide standard quantitative population-PK parameters like clearance, volume of distribution, or compartmental model estimates. |
| PGx | Matsuda_1991 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics and biodistribution of 99mTc-ECD in animals/clinical trials but does not report any pharmacogenomic effects (gene variants affecting PK/PD). |
| popPK | Mills_2013 | irrelevant | 0 | 0 | This is a review of cerebral vasospasm imaging and reports no quantitative pharmacokinetic parameters for technetium-99m exametazime. |
| popPK | Moerlein_1994 | irrelevant | 0 | 0 | The study measures I-123 tracers in baboons and only mentions Tc-99m HMPAO as a comparative standard without reporting its PK parameters. |
| PGx | Moerlein_1994 | not_relevant | 0 | 0 | The paper investigates iodine-123 tracers in baboons and does not report pharmacogenomic effects for technetium_99mtc_exametazime. |
| popPK | Ogasawara_1995 | irrelevant | 0 | 0 | The study focuses on Technetium-99m ECD (a different drug) rather than Technetium-99m Exametazime, and does not report quantitative PK parameters for the subject drug. |
| PGx | Ogasawara_1995 | not_relevant | 0 | 0 | The paper investigates the cerebral pharmacokinetics of 99mTc-ECD in pathological conditions (stroke, epilepsy) but does not mention any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Ruf_2010 | irrelevant | 0 | 0 | The paper discusses 99mTc-HMPAO (a different radiotracer) and does not contain pharmacokinetic data for 99mTc-exametazime. |
| PGx | Ruf_2010 | not_relevant | 0 | 0 | The paper compares imaging agents (anti-granulocyte MoAb vs labeled WBC) for infection diagnosis and does not discuss pharmacogenomics or technetium_99mtc_exametazime. |
| popPK | Sharma_2017 | irrelevant | 0 | 0 | The paper is a review of multimodality neuroimaging techniques and does not report specific quantitative pharmacokinetic parameters for technetium_99mtc_exametazime. |
| PGx | Sharma_2017 | not_relevant | 0 | 0 | The paper is a review on multimodality neuroimaging methods and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of technetium_99mtc_exametazime. |
| popPK | Youssef_1996 | irrelevant | 0 | 0 | Technetium-99m exametazime is used here as a radiotracer to label neutrophils for imaging studies, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Youssef_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effect of methylprednisolone on neutrophil trafficking using technetium-99m hexametazime as a tracer, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of the radiotracer itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btechnetium_99mtc_exametazime%5D&body=Drug%3A%20technetium_99mtc_exametazime%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_technetium_99mtc_exametazime/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 05:14 UTC</sub>
