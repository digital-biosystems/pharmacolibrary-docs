<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;rimantadine&quot;}]"></div>

# rimantadine

- **generic name:** rimantadine
- **ATC codes:** `J05AC02`
- **DrugBank:** [DB00478](https://go.drugbank.com/drugs/DB00478) · **PubChem:** [CID 5071](https://pubchem.ncbi.nlm.nih.gov/compound/5071)
- **molar mass:** 179.3018 g/mol (C12H21N) — DrugBank
- **groups:** approved

## About

Rimantadine is an antiviral cyclic amine used to treat and sometimes prevent influenzavirus A infection. It is taken orally in tablet or liquid forms and is well absorbed through the gut. It is no longer recommended for prescribing flu treatment due to widespread viral resistance.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q42171](https://www.wikidata.org/wiki/Q42171), [Wikipedia](https://en.wikipedia.org/wiki/Rimantadine?oldid=1382846557) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Breitinger_2021_E_protein_induced_cytotoxicity](drugs/drug_rimantadine/pd_Breitinger_2021_E_protein_induced_cytotoxicity.md) | E-protein induced cytotoxicity ← rimantadine · direct Emax (saturable) effect | — | Breitinger U et al., Inhibition of SARS CoV Envelope Protein…, Frontiers in microbiology (2021) | [10.3389/fmicb.2021.692423](https://doi.org/10.3389/fmicb.2021.692423) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Breitinger_2021_Iobs](drugs/drug_rimantadine/pd_Breitinger_2021_Iobs.md) | E protein channel-mediated current ← rimantadine · direct Emax (saturable) effect | — | Breitinger U et al., Inhibition of SARS CoV Envelope Protein…, Frontiers in microbiology (2021) | [10.3389/fmicb.2021.692423](https://doi.org/10.3389/fmicb.2021.692423) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kobe_2026_MHV_infectivity_plaque_reduction_post_treatment](drugs/drug_rimantadine/pd_Kobe_2026_MHV_infectivity_plaque_reduction_post_treatment.md) | MHV infectivity (plaque reduction, post-treatment) ← rimantadine · direct sigmoid Emax (Hill) effect | — | Kobe N et al., In silico characterisation of a novel S…, Bioorganic chemistry (2026) | [10.1016/j.bioorg.2026.109949](https://doi.org/10.1016/j.bioorg.2026.109949) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:04 | 0:03 | 0/0/0 | 3/0/0 | 0/0/0 | 3,768/168 | einfracz / qwen3.8-27b | 4 | 2/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 57 matched, 49 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alqazzaz_2011 | irrelevant | 0 | 0 | This is an in-vitro study of ion channel blocking by rimantadine, not a pharmacokinetic study. |
| PGx | Alqazzaz_2011 | not_relevant | 0 | 0 | The paper reports pharmacodynamic interaction data of rimantadine with a bacterial ion channel, but does not investigate the effect of any human gene variant or genotype on rimantadine's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Angelava_2006 | irrelevant | 0 | 0 | The paper is a review of avian influenza and explicitly states that H5N1 strains are resistant to rimantadine, containing no original pharmacokinetic data or quantitative parameter values for the drug. |
| PGx | Angelava_2006 | not_relevant | 0 | 0 | The paper is a general review of Avian influenza and does not report any pharmacogenomic effects on rimantadine. |
| popPK | Artyushin_2019 | irrelevant | 0 | 0 | The study is an in-vitro antiviral activity assay where rimantadine is used only as a reference compound, with no PK parameters reported. |
| PGx | Artyushin_2019 | not_relevant | 0 | 0 | The paper reports on the synthesis and antiviral activity of novel chemical conjugates, with no data on the pharmacogenomics or PK/PD of rimantadine. |
| popPK | Breitinger_2016 | irrelevant | 0 | 0 | The study is an in-vitro patch-clamp investigation of HCV p7 channel inhibition by rimantadine, not a pharmacokinetic study of rimantadine disposition. |
| PGx | Breitinger_2016 | not_relevant | 5 | 10 | The paper reports genotype-specific sensitivity of HCV p7 channels to rimantadine (IC50 values) as a mechanism of drug action against the virus, not a pharmacogenomic effect on human pharmacokinetics (PK) or pharmacodynamics (PD) in a patient population. |
| popPK | Breitinger_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of SARS-CoV E protein channel inhibition by rimantadine, reporting IC50 values for channel blocking rather than pharmacokinetic disposition parameters. |
| PGx | Breitinger_2021 | not_relevant | 0 | 0 | The paper studies the mechanism of action of rimantadine as a viroporin inhibitor on SARS-CoV E protein, with no focus on pharmacogenomics or human PK/PD parameters. |
| popPK | Brooks_2012 | irrelevant | 0 | 0 | The study investigates the antiviral activity of arbidol in vitro and in mice, mentioning rimantadine only as a comparator for EC50 values without reporting any pharmacokinetic parameters. |
| PGx | Brooks_2012 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of arbidol and mentions rimantadine only as a comparison in an in vitro assay; it does not report pharmacogenomic effects on PK or PD parameters for rimantadine. |
| popPK | Burlington_1982 | irrelevant | 1 | 1 | This is an in-vitro antiviral efficacy study in ferret tracheal ciliated epithelium, not a pharmacokinetic study, and no PK parameters for rimantadine are reported. |
| PGx | Burlington_1982 | not_relevant | 0 | 0 | The paper compares antiviral activities in a cell/animal model, but does not report a pharmacogenomic effect (gene variant) on a PK or PD parameter. |
| popPK | Burstein_1999 | irrelevant | 0 | 0 | The study focuses on in vitro antiviral activity of a new adamantane-derivative (Amant) and uses rimantadine only as a comparator that did not inhibit HIV replication, with no pharmacokinetic data provided. |
| PGx | Burstein_1999 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity of a new adamantane derivative and explicitly states that rimantadine did not inhibit HIV replication; it does not report any pharmacogenomic effect on the PK or PD of rimantadine. |
| popPK | Dong_2025 | irrelevant | 0 | 0 | The study focuses on the discovery and in vitro biological activity of new antiviral compounds, reporting only calculated ADMET properties rather than measured quantitative pharmacokinetic disposition parameters for rimantadine. |
| PGx | Dong_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of new chemical entities against viral mutants and does not investigate human genetic variants affecting rimantadine pharmacokinetics or pharmacodynamics. |
| popPK | Garifullin_2023 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (IC50) of chemical analogues using Rimantadine as a comparator control, containing no pharmacokinetic data. |
| PGx | Garifullin_2023 | not_relevant | 0 | 0 | The paper reports the synthesis and antiviral activity of new chemical compounds, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of rimantadine. |
| popPK | Hossan_2018 | irrelevant | 0 | 0 | The study is an in-vitro antiviral assay of a plant extract and rimantadine is only mentioned as a comparator drug for viral resistance, not as the subject of pharmacokinetic analysis. |
| PGx | Hossan_2018 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of Embelia ribes against influenza virus, with no discussion of human pharmacogenomics or PK/PD parameters for rimantadine. |
| popPK | Hu_2017 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of a novel M2 channel blocker (compound 3) in mice, mentioning rimantadine only as background/comparator context without reporting any pharmacokinetic parameters for it. |
| PGx | Hu_2017 | not_relevant | 0 | 0 | The paper reports the antiviral activity of a new compound against influenza M2 mutants, not the effect of human gene variants on the PK/PD of rimantadine. |
| popPK | Hurt_2007 | irrelevant | 0 | 0 | The paper reports on viral susceptibility and resistance mutations (IC50) to rimantadine, not pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PGx | Hurt_2007 | not_relevant | 0 | 0 | The paper reports viral resistance mutations (M2 gene) affecting drug efficacy, not human pharmacogenomic variants affecting drug PK/PD. |
| popPK | Intharathep_2008 | irrelevant | 0 | 0 | The paper is a molecular dynamics simulation study focusing on the mechanism of inhibition in the M2 ion channel, not a pharmacokinetic study reporting disposition parameters for rimantadine. |
| PGx | Intharathep_2008 | not_relevant | 0 | 0 | The paper describes molecular dynamics simulations of drug binding mechanisms but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Jacob_2016 | irrelevant | 0 | 0 | The paper is an in-vitro virology study on amantadine resistance in H5N1 viruses, not a pharmacokinetic study of rimantadine. |
| PGx | Jacob_2016 | not_relevant | 0 | 0 | The study investigates viral resistance mutations (S31N, V27A) in H5N1 influenza, not human pharmacogenomic variants affecting drug PK/PD. |
| popPK | Jefferson_2014 | irrelevant | 0 | 0 | The paper is a review of neuraminidase inhibitors (oseltamivir and zanamivir) and does not study rimantadine or report any pharmacokinetic parameters for it. |
| PGx | Jefferson_2014 | not_relevant | 0 | 0 | The paper reviews neuraminidase inhibitors (oseltamivir/zanamivir) and contains no information regarding rimantadine or pharmacogenomic effects. |
| popPK | Kamal_2015 | irrelevant | 0 | 0 | The paper models the pharmacodynamics of oseltamivir on influenza virus, not the pharmacokinetics of rimantadine. |
| PGx | Kamal_2015 | not_relevant | 0 | 0 | The paper describes a drug-disease model for oseltamivir and influenza progression, containing no data on rimantadine or pharmacogenomic effects. |
| popPK | Kang_2015 | irrelevant | 0 | 0 | The study focuses on the synthesis and antiviral activity of novel purine derivatives, using rimantadine only as a comparator in cell assays without reporting any pharmacokinetic parameters. |
| PGx | Kang_2015 | not_relevant | 0 | 0 | The paper reports the synthesis and antiviral activity of new purine derivatives, comparing their efficacy to rimantadine, but does not investigate any genetic variants or pharmacogenomic effects on rimantadine's pharmacokinetics or pharmacodynamics. |
| popPK | Kobe_2026 | irrelevant | 0 | 0 | In vitro antiviral/drug-discovery study of SARS-CoV-2 E protein inhibitors; rimantadine is only a comparator with EC50/CC50 values, no PK disposition parameters. |
| popPK | Korshin_2013 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro antiviral activity of new compounds, mentioning rimantadine only as a comparator without providing any pharmacokinetic parameters. |
| PGx | Korshin_2013 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro/in vivo antiviral efficacy of new chemical compounds (amidoamidines) compared to rimantadine, but it does not study any gene variant or genotype's effect on rimantadine's pharmacokinetics or pharmacodynamics. |
| popPK | Kostikova_2024 | irrelevant | 0 | 0 | The study is an in-vitro phytochemical and antiviral activity assessment of Spiraea extracts, where rimantadine is used only as a reference antiviral agent with no pharmacokinetic data reported. |
| PGx | Kostikova_2024 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of plant extracts against influenza and compares its selectivity index to rimantadine, but does not study any pharmacogenomic effects (gene variants) on rimantadine's pharmacokinetics or pharmacodynamics. |
| popPK | Kuznetsov_2017 | irrelevant | 0 | 0 | This is a medicinal chemistry study on the synthesis and antiviral potency of rimantadine analogues, containing no pharmacokinetic data or disposition parameters for rimantadine. |
| PGx | Kuznetsov_2017 | not_relevant | 0 | 0 | The paper reports on the stereoselective synthesis and biological activity of novel adamantane derivatives against resistant viral strains; it does not investigate how human genetic variants affect rimantadine PK/PD. |
| popPK | Leneva_2000 | irrelevant | 0 | 0 | The study evaluates the antiviral efficacy of oseltamivir in mice and uses rimantadine only as a combination therapy agent, reporting no pharmacokinetic parameters for rimantadine. |
| PGx | Leneva_2000 | not_relevant | 0 | 0 | The paper evaluates the antiviral efficacy of oseltamivir against H5N1/H9N2 influenza viruses in mice and reports no gene variants or pharmacogenomic effects on PK/PD parameters for rimantadine or oseltamivir. |
| popPK | Leneva_2010 | irrelevant | 0 | 0 | The study reports antiviral efficacy and mortality outcomes, not pharmacokinetic parameters such as clearance or volume for rimantadine. |
| PGx | Leneva_2010 | not_relevant | 0 | 0 | The paper reports antiviral efficacy in cell and animal models, not pharmacogenomic effects on rimantadine PK or PD. |
| popPK | Nahata_1987 | irrelevant | 0 | 0 | This is a general review of antiviral drugs that mentions rimantadine as an investigational agent but does not report any quantitative pharmacokinetic parameters or original disposition data. |
| PGx | Nahata_1987 | not_relevant | 0 | 0 | The text is a general review of clinical antiviral use and does not report any pharmacogenomic effects on rimantadine PK/PD. |
| popPK | Peng_2017 | irrelevant | 0 | 0 | The study describes the development of an ELISA assay for detecting residues, not a pharmacokinetic study with quantitative disposition parameters. |
| PGx | Peng_2017 | not_relevant | 0 | 0 | The paper describes an analytical method (ELISA) for detecting residues, not pharmacogenomics. |
| popPK | Risner_2020 | irrelevant | 0 | 0 | Rimantadine is only one of many screened compounds in an in-vitro SARS-CoV-2 antiviral assay; no PK disposition parameters for rimantadine are reported. |
| popPK | Savinova_2009 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral efficacy study comparing rimantadine with betulin derivatives, containing no pharmacokinetic data. |
| PGx | Savinova_2009 | not_relevant | 0 | 0 | The paper investigates the antiviral efficacy of betulin derivatives in combination with rimantadine in cell cultures, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Smee_2002 | irrelevant | 0 | 0 | This is an in-vitro virology study comparing methods for determining antiviral activity (EC50) and toxicity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Smee_2002 | not_relevant | 0 | 0 | The paper compares in-vitro assays for antiviral activity and toxicity; it does not report any genetic effects on rimantadine pharmacokinetics or pharmacodynamics. |
| popPK | Spilovska_2016 | irrelevant | 2 | 0 | This is a review article summarizing known properties, and the evidence provided contains no specific quantitative pharmacokinetic parameter values for rimantadine. |
| PGx | Spilovska_2016 | not_relevant | 0 | 0 | The paper is a general review of adamantane derivatives and does not report pharmacogenomic effects on rimantadine PK/PD. |
| popPK | Sugaya_2012 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of peramivir, not rimantadine. |
| PGx | Sugaya_2012 | not_relevant | 0 | 0 | The paper studies peramivir in children and does not mention rimantadine or any pharmacogenomic analysis. |
| popPK | Thomaston_2021 | irrelevant | 0 | 0 | The paper investigates molecular binding mechanisms and electrophysiology, not pharmacokinetic disposition parameters (CL, V, t1/2) in vivo or in vitro for rimantadine. |
| PGx | Thomaston_2021 | not_relevant | 0 | 0 | The paper investigates enantiomeric binding mechanisms and does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tisdale_2000 | irrelevant | 0 | 0 | The paper is a review of viral susceptibility assays and does not report any pharmacokinetic parameters for rimantadine. |
| PGx | Tisdale_2000 | not_relevant | 0 | 0 | The paper discusses viral susceptibility monitoring and assay methods for influenza drugs, not pharmacogenomic effects on drug pharmacokinetics or pharmacodynamics. |
| popPK | Wagaman_2002 | irrelevant | 0 | 0 | The study is an in vitro antiviral assay validation reporting EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Wagaman_2002 | not_relevant | 0 | 0 | The paper describes a novel bDNA assay for detecting influenza A and validates it using rimantadine to measure antiviral potency (EC50), but it does not report any pharmacogenomic data linking genetic variants to PK or PD parameters. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The study is an analytical method development for ribavirin residue detection, and rimantadine is only mentioned as a non-cross-reactive comparator without any pharmacokinetic data. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The paper describes the development of an immunoassay for ribavirin residue analysis and mentions rimantadine only as a non-reactive compound in a specificity test; it contains no pharmacogenomic data. |
| popPK | Zarubaev_2015 | irrelevant | 0 | 0 | The paper evaluates the antiviral activity of a new compound (camphecene) and only mentions rimantadine as a comparator for resistance susceptibility, reporting no pharmacokinetic parameters for rimantadine. |
| PGx | Zarubaev_2015 | not_relevant | 0 | 0 | The paper reports the antiviral activity of a novel compound (camphecene) and mentions rimantadine only to state that the new compound's effect is independent of rimantadine resistance; it does not report any pharmacogenomic effect on the PK or PD of rimantadine. |
| popPK | Zhan_2012 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and in-vitro biological activity study comparing new compounds to rimantadine, with no pharmacokinetic data reported. |
| PGx | Zhan_2012 | not_relevant | 0 | 0 | The paper reports in-vitro antiviral activity of new synthesized compounds and compares potency to rimantadine, but does not investigate the effect of genetic variants on the pharmacokinetics or pharmacodynamics of rimantadine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brimantadine%5D&body=Drug%3A%20rimantadine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rimantadine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
