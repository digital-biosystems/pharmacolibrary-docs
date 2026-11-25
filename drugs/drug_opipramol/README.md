<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;opipramol&quot;}]"></div>

# opipramol

- **generic name:** opipramol
- **ATC codes:** `N06AA05`
- **DrugBank:** [DB12930](https://go.drugbank.com/drugs/DB12930) · **PubChem:** [CID 9417](https://pubchem.ncbi.nlm.nih.gov/compound/9417)
- **molar mass:** 363.505 g/mol (C23H29N3O) — DrugBank
- **groups:** investigational

## About

Opipramol is a tricyclic antidepressant and anxiolytic indicated for the treatment of anxiety and depressive disorders. It is administered orally in tablet or pill form. The drug is currently classified as investigational, although it is described as being used throughout Europe.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416562](https://www.wikidata.org/wiki/Q416562), [Wikipedia](https://en.wikipedia.org/wiki/Opipramol?oldid=1381076015) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">mouse</span> | [Church_1995_IBa](drugs/drug_opipramol/pd_Church_1995_IBa.md) | voltage-activated Ca2+ channel currents carried by barium ions ← opipramol · inhibition effect | — | Church J et al., Blockade by sigma site ligands of high…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb15929.x](https://doi.org/10.1111/j.1476-5381.1995.tb15929.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Fletcher_1995_NMDA_currents](drugs/drug_opipramol/pd_Fletcher_1995_NMDA_currents.md) | NMDA-evoked currents ← opipramol · inhibition effect | — | Fletcher EJ et al., Blockade by sigma site ligands of N-met…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb15928.x](https://doi.org/10.1111/j.1476-5381.1995.tb15928.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Fletcher_1995_NMDA_evoked_Ca](drugs/drug_opipramol/pd_Fletcher_1995_NMDA_evoked_Ca.md) | NMDA-evoked rises in intracellular free calcium concentration ← opipramol · inhibition effect | — | Fletcher EJ et al., Blockade by sigma site ligands of N-met…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb15928.x](https://doi.org/10.1111/j.1476-5381.1995.tb15928.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:43 | 0:03 | 0/0/0 | 0/3/0 | 0/0/0 | 3,024/162 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 32 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moebius_1998.pdf` | Moebius FF et al., Pharmacological analysis of sterol delt…, Molecular pharmacology (1998) | pd | 4 | [10.1124/mol.54.3.591](https://doi.org/10.1124/mol.54.3.591) | [9730919](https://www.ncbi.nlm.nih.gov/pubmed/9730919) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-24 01:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calvo_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carisoprodol and its metabolite meprobamate, not opipramol. |
| PGx | Calvo_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of carisoprodol, not opipramol. |
| popPK | Calvo_2022_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of carisoprodol, not opipramol. |
| PGx | Calvo_2022_2 | not_relevant | 0 | 0 | The paper evaluates carisoprodol, not opipramol, and does not report any pharmacogenomic effects. |
| popPK | Carbonaro_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carisoprodol and meprobamate in rats, not opipramol. |
| PGx | Carbonaro_2020 | not_relevant | 0 | 0 | The paper studies carisoprodol, not opipramol, and does not report a pharmacogenomic effect. |
| popPK | Ceschi_2013 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meprobamate, not opipramol. |
| PGx | Ceschi_2013 | not_relevant | 0 | 0 | The paper reports on meprobamate, not opipramol, and focuses on hemodiafiltration effects on clearance without any pharmacogenomic investigation. |
| popPK | Church_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study examining Ca2+ channel blockade, not a pharmacokinetic study. |
| PGx | Church_1995 | not_relevant | 0 | 0 | The paper describes electrophysiological properties of opipramol blocking calcium channels and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Dalén_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carisoprodol and meprobamate, not opipramol. |
| PGx | Dalén_1996 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of carisoprodol and meprobamate, not opipramol. |
| popPK | De_1981 | irrelevant | 0 | 0 | The study reports clearance parameters for various barbiturates and sedatives (e.g., amobarbital, meprobamate) but does not mention opipramol. |
| PGx | De_1981 | not_relevant | 0 | 0 | The paper discusses hemoperfusion/hemodialysis for drug intoxication and does not mention opipramol or any pharmacogenomic factors. |
| popPK | Ferri_2025 | irrelevant | 0 | 0 | The study investigates the in-vitro metabolism of carisoprodol, not the pharmacokinetics of opipramol. |
| PGx | Ferri_2025 | not_relevant | 0 | 0 | The study analyzes the metabolism of carisoprodol, not opipramol, and does not involve pharmacogenomics. |
| popPK | Ferri_2026 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of carisoprodol in rat liver microsomes, not the pharmacokinetics of opipramol. |
| PGx | Ferri_2026 | not_relevant | 0 | 0 | The paper studies the metabolism of carisoprodol, not opipramol. |
| popPK | Fletcher_1995 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing opipramol's interaction with NMDA receptors, not a pharmacokinetic study. |
| PGx | Fletcher_1995 | not_relevant | 0 | 0 | The paper studies the electrophysiological mechanism of opipramol on NMDA receptors in vitro and does not report any pharmacogenomic effects (gene variant/genotype) on its PK or PD parameters. |
| popPK | Gahr_2017 | irrelevant | 0 | 0 | The text is a review of clinical efficacy and safety, containing no quantitative pharmacokinetic parameter values. |
| PD | Gahr_2017 | not_relevant | 1 | 0 | The text is a qualitative review of opipramol's mechanism and clinical use, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Gahr_2017 | not_relevant | 2 | 0 | The text mentions CYP2D6 as the primary metabolic pathway, indicating a potential pharmacogenomic mechanism, but it does not report specific quantitative changes in PK or PD parameters associated with specific gene variants or phenotypes. |
| popPK | Gerlach_2002 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy (sleep quality, anxiety) of opipramol as a premedication, with no pharmacokinetic data (CL, V, t1/2, etc.) reported. |
| PD | Gerlach_2002 | not_relevant | 2 | 0 | The paper reports qualitative dose-response observations (100 mg vs 50 mg) but provides no numeric PD parameters, concentration-effect curves, or quantitative effect magnitudes. |
| PGx | Gerlach_2002 | not_relevant | 0 | 0 | The paper evaluates opipramol as a premedication for sleep and anxiety but does not report any pharmacogenomic analysis (e.g., gene variants) affecting PK or PD parameters. |
| popPK | Gilbert_1982 | irrelevant | 0 | 0 | The study concerns pentaerythritol tetranitrate, meprobamate, and diphenhydramine; opipramol is not mentioned or studied. |
| PGx | Gilbert_1982 | not_relevant | 0 | 0 | The study examines the pharmacokinetics of pentaerythritol mononitrate, not opipramol, and focuses on drug-drug interactions rather than pharmacogenomics. |
| popPK | Gilbert_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meprobamate and other drugs, not opipramol. |
| PGx | Gilbert_1984 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of meprobamate and its combinations, not opipramol, and does not report any pharmacogenomic effects. |
| popPK | Hassan_1986 | irrelevant | 0 | 0 | The paper describes a case report regarding meprobamate overdose treatment and does not contain pharmacokinetic data for opipramol. |
| PGx | Hassan_1986 | not_relevant | 0 | 0 | The paper discusses meprobamate overdose treatment, not the pharmacogenomics of opipramol. |
| popPK | Howell_2009 | irrelevant | 0 | 0 | The study is an in vitro investigation of liposome binding for overdose treatment, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Howell_2009 | not_relevant | 0 | 0 | The paper describes in vitro binding of opipramol to liposomes for overdose treatment, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| PGx | Howell_2009 | not_relevant | 0 | 0 | The paper investigates the binding of opipramol to liposomes for overdose treatment, not the effect of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Hoy_1978 | irrelevant | 0 | 0 | The study focuses on the hemoperfusion clearance of meprobamate, not the pharmacokinetics of opipramol. |
| PGx | Hoy_1978 | not_relevant | 0 | 0 | The paper discusses meprobamate and hemoperfusion, not opipramol or pharmacogenomics. |
| popPK | Hueppe_2011 | irrelevant | 0 | 0 | This is a clinical trial assessing subjective sleep quality and anxiety outcomes, not a pharmacokinetic study, and it reports no quantitative disposition parameters (CL, V, ka, etc.) for opipramol. |
| PD | Hueppe_2011 | not_relevant | 2 | 1 | The study reports a qualitative dose-response (100mg vs 150mg) but provides no concentration data, PK parameters, or numeric PD parameters (e.g., Emax, EC50) to derive a quantitative exposure-response relationship. |
| PGx | Hueppe_2011 | not_relevant | 0 | 0 | The paper reports a clinical trial on the efficacy of opipramol on sleep quality and does not investigate any genetic variants or pharmacogenomic effects. |
| popPK | Kanarkowski_1979 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Kanarkowski_1979 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, curves, or parameters to derive a pharmacodynamic relationship. |
| PGx | Kanarkowski_1979 | not_relevant | 0 | 0 | The paper focuses on determining optimal dosage in depression without reporting any pharmacogenomic effects of gene variants on opipramol's PK or PD parameters. |
| popPK | Koffler_1978 | irrelevant | 0 | 0 | The paper reports on hemoperfusion treatment for drug overdose involving various sedatives and hypnotics, but does not mention opipramol or provide its pharmacokinetic parameters. |
| PGx | Koffler_1978 | not_relevant | 0 | 0 | The paper discusses hemoperfusion for drug overdose and does not involve opipramol or pharmacogenomics. |
| popPK | Lewandowski_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carisoprodol and its metabolite meprobamate, not opipramol. |
| PGx | Lewandowski_2017 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of carisoprodol and meprobamate, not opipramol, and does not report any pharmacogenomic effects. |
| popPK | Miller_1989 | irrelevant | 0 | 0 | The paper is a review of the effects of cigarette smoking on various drugs and does not mention opipramol or provide any pharmacokinetic data for it. |
| PGx | Miller_1989 | not_relevant | 0 | 0 | The paper discusses the effects of cigarette smoking on drug PK/PD and does not mention opipramol or any genetic variants. |
| popPK | Moebius_1994 | irrelevant | 0 | 0 | The study is a mechanistic biochemistry paper characterizing a binding protein, not a pharmacokinetic study of opipramol. |
| PD | Moebius_1994 | not_relevant | 1 | 2 | The paper reports an IC50 for opipramol binding to a purified protein, which is a pharmacological binding affinity parameter, not a pharmacodynamic exposure-response or dose-response relationship for a drug effect in a biological system. |
| PGx | Moebius_1994 | not_relevant | 0 | 0 | The paper describes the purification and characterization of a calcium antagonist binding protein, not a pharmacogenomic study of opipramol's PK/PD parameters. |
| popPK | Moebius_1998 | irrelevant | 0 | 0 | The paper is a mechanistic/pharmacological study on enzyme binding and inhibition (in vitro), not a pharmacokinetic study for opipramol. |
| PD | Moebius_1998 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 for opipramol against a specific enzyme (EBP), which is a pharmacological potency parameter, but it does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical effect in a biological system. |
| PGx | Moebius_1998 | not_relevant | 0 | 0 | The paper investigates drug binding properties of sterol isomerase proteins (EBP, sigma1, ERG2) and does not report any pharmacogenomic effects or genotype-dependent changes in PK/PD for opipramol. |
| popPK | Nilsson_1998 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PGx | Nilsson_1998 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and bioavailability of a sustained-release formulation of opipramol and does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Simon_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carisoprodol and its metabolite meprobamate, not opipramol. |
| PGx | Simon_2010 | not_relevant | 0 | 0 | The study investigates the bioavailability of carisoprodol in healthy volunteers and does not report any pharmacogenomic effects on the PK/PD of opipramol. |
| popPK | Thurgur_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of anticonvulsant activity in rat hippocampal slices, not a pharmacokinetic study. |
| PGx | Thurgur_1998 | not_relevant | 0 | 0 | The study investigates the anticonvulsant pharmacodynamics of sigma receptor ligands in a rat model and does not examine the impact of any gene variant or genotype on the PK or PD of opipramol. |
| popPK | Tribut_2010 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of felbamate, not opipramol. |
| PGx | Tribut_2010 | not_relevant | 0 | 0 | The text concerns the therapeutic drug monitoring of felbamate and contains no information regarding opipramol or any pharmacogenomic effects. |
| popPK | Verpooten_1982 | irrelevant | 0 | 0 | The study focuses on nine other drugs (e.g., phenobarbital, thallium) and does not mention or report pharmacokinetic data for opipramol. |
| PGx | Verpooten_1982 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of other drugs in patients treated with extracorporeal therapies and does not mention opipramol or any pharmacogenomic factors. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bopipramol%5D&body=Drug%3A%20opipramol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_opipramol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
