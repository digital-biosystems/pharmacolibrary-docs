<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoteric acid&quot;}]"></div>

# gadoteric acid

- **generic name:** gadoteric acid
- **ATC codes:** `V08CA02`
- **DrugBank:** [DB09132](https://go.drugbank.com/drugs/DB09132) · **PubChem:** [CID 158536](https://pubchem.ncbi.nlm.nih.gov/compound/158536)
- **molar mass:** 558.65 g/mol (C16H25GdN4O8) — DrugBank
- **groups:** approved, investigational

## About

Gadoteric acid is a paramagnetic magnetic resonance imaging contrast agent used to improve image quality during MRI scans. It is administered as an intravenous injection, with intramuscular administration also listed as a route. The drug is approved for use and remains part of clinical practice.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1490905](https://www.wikidata.org/wiki/Q1490905), [Wikipedia](https://en.wikipedia.org/wiki/Gadoteric_acid?oldid=1379761311) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadoterate meglumine | metabolite | 753.861 | C23H42GdN5O13 | PubChem | [6918037](https://pubchem.ncbi.nlm.nih.gov/compound/6918037) | Mühler_2011 |
| gadoteric_acid (gadoteric acid) | metabolite | 558.65 | C16H25GdN4O8 | DrugBank | [158536](https://pubchem.ncbi.nlm.nih.gov/compound/158536) | Mühler_2011, Scala_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Mühler_2011_reference](drugs/drug_gadoteric_acid/GadotericAcid_Mhler2011_reference.md) | — | 1-compartment (no model) | 2 | Mühler MR et al., Maternofetal pharmacokinetics of a gado…, Radiology (2011) | [10.1148/radiol.10100652](https://doi.org/10.1148/radiol.10100652) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Scala_2018_reference](drugs/drug_gadoteric_acid/GadotericAcid_Scala2018_reference.md) | — | 2-compartment (no model) | 8 | Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018) | [10.1097/RLI.0000000000000412](https://doi.org/10.1097/RLI.0000000000000412) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | [Beydemir_2021_PON1](drugs/drug_gadoteric_acid/pd_Beydemir_2021_PON1.md) | PON1 activity ← gadoteric acid · inhibition effect | — | Beydemir Ş et al., Gadolinium-based contrast agents: in vi…, Drug and chemical toxicology (2021) | [10.1080/01480545.2019.1620266](https://doi.org/10.1080/01480545.2019.1620266) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Han_2025_binding_of_99mTc_DOTA_G3CNGRC_to_the_CD13_receptor](drugs/drug_gadoteric_acid/pd_Han_2025_binding_of_99mTc_DOTA_G3CNGRC_to_the_CD13_receptor.md) | binding of 99mTc-DOTA-G3CNGRC to the CD13 receptor ← DOTA-G3CNGRC · inhibition effect | — | Han S et al., Early evaluation of anti-angiogenic eff…, Scientific reports (2025) | [10.1038/s41598-025-05905-1](https://doi.org/10.1038/s41598-025-05905-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:56 | 0:06 | 1/1/0 | 2/0/0 | 0/0/0 | 3,978/174 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 44 matched, 43 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Annet_2004 | irrelevant | 1 | 0 | The study uses gadoterate dimeglumine (a different GBCA) as a diagnostic contrast agent to measure GFR, and does not report PK parameters for gadoteric acid. |
| PGx | Annet_2004 | not_relevant | 0 | 0 | The paper evaluates GFR measurement methods in rabbits using MRI and a reference standard; it contains no information on gene variants, genotypes, or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of gadoteric acid. |
| popPK | Autio_2020 | irrelevant | 1 | 0 | The quantitative kinetic model is for 68Ga-DOTA, not gadoteric acid; no gadoteric-acid parameters are reported. |
| popPK | Bilgin_2025 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and molecular docking analysis, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Bilgin_2025 | not_relevant | 0 | 0 | The study investigates cytogenotoxicity and molecular docking of gadoteric acid in cell lines, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Bremerich_2000 | irrelevant | 0 | 0 | The study evaluates MRI signal intensity and visualization quality in dogs, not pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Bremerich_2000 | not_relevant | 0 | 0 | The paper investigates the dosimetry and imaging parameters of an iron-based MR contrast agent in dogs, containing no information on gadoteric acid or pharmacogenomic effects. |
| popPK | Burtea_2009 | irrelevant | 0 | 0 | The paper studies a Gd-DOTA conjugated peptide probe for MRI imaging and does not report pharmacokinetic parameters for gadoteric acid. |
| PGx | Burtea_2009 | not_relevant | 0 | 0 | The paper describes the development and validation of a Gd-DOTA-based MRI probe for VCAM-1 and contains no information regarding pharmacogenomics or gadoteric acid. |
| popPK | Corot_1998 | irrelevant | 0 | 0 | The study investigates the in vitro and in vivo effects of gadolinium chelates on angiotensin-converting enzyme (ACE) activity, not their pharmacokinetic disposition parameters. |
| PGx | Corot_1998 | not_relevant | 0 | 0 | The paper investigates structure-activity relationships and transmetallation effects on ACE for various gadolinium chelates, not the pharmacokinetics or pharmacodynamics of gadoteric acid specifically in the context of human genetic variants. |
| popPK | Curry_2019 | irrelevant | 2 | 7 | Dotarem is used as a diagnostic tracer; numeric exchange/permeability values are present, but not systemic disposition parameters. |
| popPK | Cyran_2008 | irrelevant | 0 | 0 | The paper studies different PEG-core dendrimeric gadolinium contrast agents in rats, not gadoteric acid specifically. |
| PGx | Cyran_2008 | not_relevant | 0 | 0 | The paper reports on MRI contrast agent properties in rats and does not involve human pharmacogenomics or gadoteric acid. |
| popPK | Cyran_2013 | irrelevant | 0 | 0 | The study evaluates macromolecular gadolinium contrast agents (PEG12,000-Gen4-(Gd-DOTA)16 and albumin-(Gd-DTPA)35) for DCE-MRI, not the pharmacokinetics of gadoteric acid. |
| PGx | Cyran_2013 | not_relevant | 0 | 0 | The paper evaluates a gadolinium-based MRI contrast agent (PEG12,000-Gen4-(Gd-DOTA)16) in animal models, not the specific drug gadoteric acid, and contains no pharmacogenomic data (gene variants/genotypes) affecting PK/PD. |
| popPK | Delrue_2011 | irrelevant | 0 | 0 | The study investigates Gd-DOTA and other contrast agents in a mouse tumor model for DCE-MRI purposes, not the pharmacokinetics of gadoteric acid as a subject drug. |
| PGx | Delrue_2011 | not_relevant | 0 | 0 | The paper investigates the effect of contrast agent molecular weight on DCE-MRI parameters in a tumor model and does not involve gadoteric acid or any genetic variants. |
| popPK | Deng_2012 | irrelevant | 0 | 0 | The study uses Gd-DOTA (gadoteric acid) merely as a diagnostic contrast agent to measure tissue enhancement in rats, and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for the drug itself. |
| PGx | Deng_2012 | not_relevant | 0 | 0 | The paper studies the effect of ovariectomy (hormonal/physiological change) on contrast agent diffusion in rats, which is a physiological/pharmacological study, not a pharmacogenomic study involving gene variants. |
| popPK | Edward_2010 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on fibroblast proliferation and does not report any pharmacokinetic parameters for gadoteric acid. |
| PGx | Edward_2010 | not_relevant | 0 | 0 | The study investigates the effect of gadolinium contrast agents on fibroblast proliferation in vitro, which is not a pharmacogenomic effect on a PK or PD parameter in humans. |
| popPK | Guenther_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gadoquatrane (a novel GBCA) and uses gadoterate only as a comparator agent, with no specific quantitative parameters reported for gadoterate itself in the text. |
| PGx | Guenther_2025 | not_relevant | 0 | 0 | The study characterizes the pharmacokinetics of gadoteric acid analogs in animal models but does not involve gene variants or pharmacogenomic effects. |
| popPK | Guidolin_2020 | irrelevant | 0 | 0 | The paper reports in-vitro binding kinetics to collagen, not in-vivo pharmacokinetic disposition parameters for the population. |
| PGx | Guidolin_2020 | not_relevant | 0 | 0 | The paper investigates chemical interactions with collagen, not the effect of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Han_2025 | irrelevant | 0 | 0 | The paper is an in-vivo MRI imaging study of a Gd-labeled peptide (Gd-DOTA-G3CNGRC) and Gd-DOTA in mice, not a pharmacokinetic study of the drug gadoteric acid. |
| PGx | Han_2025 | not_relevant | 0 | 0 | The paper reports on the efficacy of a new MRI probe for anti-angiogenic therapy and does not investigate any genetic variants or their effects on the pharmacokinetics or pharmacodynamics of gadoteric acid. |
| popPK | Hindel_2017 | irrelevant | 1 | 0 | Gadoteric acid is used as a diagnostic tracer to estimate tissue blood volume, not to report its quantitative disposition parameters. |
| popPK | Jost_2026 | irrelevant | 1 | 0 | The study is an MRI dose-response and signal enhancement kinetics study in pigs using gadoterate meglumine only as a comparator, with no quantitative pharmacokinetic parameters (CL, V, t1/2) reported for the target drug. |
| PGx | Jost_2026 | not_relevant | 0 | 0 | The paper investigates the dose-response and MRI signal enhancement kinetics of gadoquatrane in pigs and contains no data regarding gene variants, genotypes, or phenotypes. |
| popPK | Kalber_2011 | irrelevant | 0 | 0 | The paper studies a gadolinium-labeled colchicine derivative (Gd·DOTA·Colchicinic acid) for MRI, not the drug gadoteric_acid (Gd-ES-100), and no PK parameters are reported. |
| PGx | Kalber_2011 | not_relevant | 0 | 0 | The paper describes the synthesis and pharmacodynamics of a gadolinium-labeled colchicine derivative for MR imaging, but does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Kang_2017 | irrelevant | 0 | 0 | The study is an ex vivo comparative analysis of MR imaging properties in porcine cartilage and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for gadoteric acid. |
| PGx | Kang_2017 | not_relevant | 0 | 0 | The paper reports pharmacodynamics in an ex vivo porcine model and contains no pharmacogenomic data. |
| popPK | Kenger_2026 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and molecular docking analysis, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Kenger_2026 | not_relevant | 0 | 0 | The paper investigates the cytotoxicity and genotoxicity of gadoteric acid in cell lines and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kero_2026 | irrelevant | 2 | 0 | This is a diagnostic MBF study, and the reported numeric K1 values are for the 68Ga-DOTA analog, not gadoteric acid. |
| PGx | Kim_2020 | not_relevant | 0 | 0 | The TSPO variant is evaluated for CB251 binding, while gadoteric acid is mentioned only as a contrast agent for MRI; no genotype effect on its PK or PD is reported. |
| popPK | Knoepp_2017 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology experiment investigating ion channel modulation, not a pharmacokinetic study, and the subject drug is Gd-DTPA (Gadolinium), not gadoteric acid (Gd-DO3A). |
| PGx | Knoepp_2017 | not_relevant | 0 | 0 | The paper investigates the interaction between gadolinium ions/chelators and ion channels in a Xenopus oocyte model, rather than the pharmacokinetics or pharmacodynamics of the drug 'gadoteric_acid' in the context of human gene variants. |
| popPK | Kramer_2013 | irrelevant | 0 | 0 | The study is an imaging comparison of contrast agents (SNR/CNR) and does not report pharmacokinetic parameters (CL, V, t1/2) for gadoteric acid. |
| PGx | Kramer_2013 | not_relevant | 0 | 0 | The paper compares imaging properties of different gadolinium contrast agents and contains no information regarding gene variants or pharmacogenomics. |
| popPK | Materne_2002 | irrelevant | 0 | 0 | The study uses Gd-DOTA (gadoteric acid) as an MRI contrast agent to assess hepatic perfusion parameters in rabbits, rather than characterizing the pharmacokinetics of the drug itself. |
| PGx | Materne_2002 | not_relevant | 0 | 0 | The paper studies MRI perfusion parameters in rabbits using Gd-DOTA and does not involve any pharmacogenomic analysis or gene variants. |
| popPK | Michoux_2008 | irrelevant | 2 | 0 | Gadoterate is used as an MRI contrast probe, and no numeric disposition parameter values are reported. |
| PGx | Mühler_2011 | not_relevant | 0 | 0 | The study examines general maternofetal pharmacokinetics of gadoterate meglumine in mice and does not investigate any gene variant, genotype, or genetic phenotype. |
| popPK | Perles-Barbacaru_2007 | irrelevant | 0 | 0 | The study focuses on an MRI method for mapping cerebral blood volume fraction using paramagnetic contrast agents (P760 and Gd-DOTA) in rats, not on the pharmacokinetic parameters of gadoteric acid. |
| PGx | Perles-Barbacaru_2007 | not_relevant | 0 | 0 | The paper describes a new MRI method for mapping cerebral blood volume using gadolinium contrast agents, but it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Pozeg_2019 | irrelevant | 0 | 0 | The study investigates MRI signal intensity changes (pharmacodynamics/toxicology) associated with gadoterate meglumine exposure, not its pharmacokinetic parameters. |
| PGx | Pozeg_2019 | not_relevant | 0 | 0 | The study investigates the association between age and gadolinium-induced MRI signal changes, not the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Preda_2005 | irrelevant | 0 | 0 | The study evaluates a different contrast agent (CMD-A2-Gd-DOTA), not gadoteric acid. |
| PGx | Preda_2005 | not_relevant | 0 | 0 | The paper describes an MRI study using a gadolinium-based contrast agent (CMD-A2-Gd-DOTA) in rats, which is distinct from the drug gadoteric acid and contains no pharmacogenomic or genetic data. |
| popPK | Sarraf_2015 | irrelevant | 0 | 0 | The study uses gadoteric acid (Gd-DOTA) solely as a diagnostic contrast agent for MRI signal modeling and tumor blood volume quantification in rats, without reporting pharmacokinetic parameters for the drug itself. |
| PGx | Sarraf_2015 | not_relevant | 0 | 0 | The paper describes an MRI signal modeling method for quantifying tumor blood volume and does not investigate pharmacogenomic effects on the PK or PD of gadoteric acid. |
| PGx | Scala_2018 | not_relevant | 0 | 0 | The paper describes population PK/PD in pediatric subjects but does not investigate genetic variants or pharmacogenomic effects on these parameters. |
| popPK | Sessa_2015 | irrelevant | 0 | 0 | The paper is a post-marketing surveillance report of adverse drug reactions to contrast media and does not contain pharmacokinetic parameter estimation for gadoteric acid. |
| PGx | Sessa_2015 | not_relevant | 0 | 0 | The paper is a post-marketing surveillance report on adverse reactions to contrast media and does not contain any data on gene variants or pharmacogenomic effects. |
| popPK | Towbin_2021 | irrelevant | 0 | 0 | The study evaluates brain T1-weighted signal intensity changes from repeated administrations of gadopentetate dimeglumine and gadoterate meglumine, but contains no pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Towbin_2021 | not_relevant | 0 | 0 | The study investigates MRI signal changes in pediatric patients receiving gadolinium contrast and explicitly reports that patient gender and age were not associated with changes; it does not report any pharmacogenomic effects or genetic variants. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The paper describes the engineering of a pH-sensitive liposomal vehicle for releasing a gadolinium-based MRI contrast agent (Gd-DOTA), not the pharmacokinetic disposition of gadoteric acid. |
| PGx | Yang_2018 | not_relevant | 0 | 0 | The paper reports the engineering of a pH-sensitive liposomal delivery system for a gadolinium MRI contrast agent and contains no data on genetic variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Zarabi_2009 | irrelevant | 0 | 0 | The paper is an in vivo imaging study of an HPMA copolymer-Gd conjugate in mice, not a pharmacokinetic study of gadoteric acid. |
| PGx | Zarabi_2009 | not_relevant | 0 | 0 | The paper focuses on the MR imaging properties and tumor targeting of an HPMA copolymer-RGDfK conjugate, with no data on the pharmacokinetics, pharmacodynamics, or pharmacogenomic effects of gadoteric acid. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | The study investigates bone marrow perfusion in hypertensive rats using Gd-DOTA as a diagnostic contrast agent, rather than characterizing the pharmacokinetic disposition parameters of the drug itself. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The study compares perfusion MRI indices in hypertensive vs. normotensive rats using Gd-DOTA, but does not report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study focuses on Gd(III)-HPPH conjugates for imaging/therapy, not the pharmacokinetics of the drug gadoteric_acid. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper focuses on the structural optimization of a gadolinium-chlorophyll conjugate for imaging and therapy, not on the pharmacokinetics or pharmacodynamics of gadoteric_acid (Omniscan) in relation to gene variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadoteric_acid%5D&body=Drug%3A%20gadoteric_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadoteric_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:53 UTC</sub>
