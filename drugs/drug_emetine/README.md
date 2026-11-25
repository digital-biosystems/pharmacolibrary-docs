<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;emetine&quot;}]"></div>

# emetine

- **generic name:** emetine
- **ATC codes:** `P01AX02`
- **DrugBank:** [DB13393](https://go.drugbank.com/drugs/DB13393) · **PubChem:** none
- **molar mass:** 480.649 g/mol (C29H40N2O4) — DrugBank
- **groups:** investigational

## About

Emetine is an antiparasitic isoquinoline alkaloid used to treat amoebiasis and fascioloidiasis. It is administered as a parenteral injection. The drug is currently classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3050386](https://www.wikidata.org/wiki/Q3050386), [Wikipedia](https://en.wikipedia.org/wiki/Emetine?oldid=1329466915) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hudson_2016_TNF](drugs/drug_emetine/pd_Hudson_2016_TNF.md) | TNF ← emetine · direct Emax (saturable) effect | — | Hudson LK et al., Emetine Di-HCl Attenuates Type 1 Diabet…, Molecular medicine (Cambrid… (2016) | [10.2119/molmed.2016.00082](https://doi.org/10.2119/molmed.2016.00082) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mukhopadhyay_2016_HCMV_luciferase](drugs/drug_emetine/pd_Mukhopadhyay_2016_HCMV_luciferase.md) | HCMV replication (pp28-luciferase activity) ← emetine · direct sigmoid Emax (Hill) effect | — | Mukhopadhyay R et al., Efficacy and Mechanism of Action of Low…, PLoS pathogens (2016) | [10.1371/journal.ppat.1005717](https://doi.org/10.1371/journal.ppat.1005717) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:47 | 0:04 | 0/0/0 | 2/0/0 | 0/0/0 | 3,290/167 | einfracz / qwen3.8-27b | 9 | 1/8 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bleasel_2020 | irrelevant | 2 | 1 | A narrative review/rationale paper on emetine as antiviral; it cites only plasma/tissue concentrations from prior studies, with no clearance, volume, half-life, or population-PK model parameters for emetine reported. |
| popPK | Bleasel_2020_2 | irrelevant | 1 | 0 | This is a narrative review of emetine's antiviral/anti-inflammatory use and toxicity with no PK parameters (no CL, V, ka, or compartmental model values); the "long biological half-life" is mentioned without numbers. |
| popPK | Chen_1982 | irrelevant | 0 | 0 | The study is an in-vitro mutagenicity assay where emetine is used as a selection agent for resistant mutants, not a pharmacokinetic study of emetine disposition. |
| PGx | Chen_1982 | not_relevant | 0 | 0 | The paper studies the mutagenic properties of shale oil byproducts using emetine as a genetic selection marker in cell lines, not a pharmacogenomic effect of a gene variant on emetine's PK or PD. |
| popPK | Gupta_1980 | irrelevant | 0 | 0 | The paper is a genetic mutagenesis study in cell culture where emetine is used as a selectable agent, not a PK study. |
| PGx | Gupta_1980 | not_relevant | 0 | 0 | The paper uses emetine as a selection agent for studying mutagenesis in Chinese hamster ovary cells, not as a drug in humans with pharmacogenomic effects on PK or PD. |
| popPK | Hu_2023 | irrelevant | 0 | 0 | This is an in vitro antiviral screening study; emetine is only mentioned as a screening hit with no PK parameters. |
| popPK | Hudson_2016 | irrelevant | 0 | 0 | This is a mechanistic and therapeutic study on emetine's effect on macrophage activation and diabetes in mice, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2, etc.). |
| PGx | Hudson_2016 | not_relevant | 0 | 0 | The study investigates the therapeutic efficacy of emetine in diabetic mice and does not report any pharmacogenomic effects (gene variants altering PK/PD). |
| popPK | Leatherman_1993 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study examining the effect of emetine on toxin binding in cells, not a pharmacokinetic study with disposition parameters. |
| PGx | Leatherman_1993 | not_relevant | 0 | 0 | The paper discusses the cellular mechanism of action of emetine on protein synthesis and toxin association in the presence of T-2 toxin, with no mention of gene variants, genotypes, or pharmacogenomics. |
| popPK | Lund_1996 | irrelevant | 0 | 0 | The study is an in-vitro molecular biology experiment using emetine as a protein synthesis inhibitor, not a pharmacokinetic study of emetine's disposition. |
| PGx | Lund_1996 | not_relevant | 0 | 0 | The paper studies the effect of emetine as an inhibitor of protein synthesis on the expression of urokinase-type plasminogen activator, its receptor, and PAI-1 in cancer cell lines; it does not report a pharmacogenomic effect of a gene variant on the PK or PD of emetine. |
| popPK | Mukhopadhyay_2016 | relevant | 4 | 2 | PK study of emetine in BALB/c mice (0.1 mg/kg oral) with half-life 35 h reported, but detailed disposition parameters (CL, V, tissue exposures) are in S2 Table/Fig 3A not provided. |
| popPK | Paranka_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of doxorubicin cardiotoxicity in rat heart cells, using emetine only as a positive control for cardiotoxicity without reporting any quantitative pharmacokinetic parameters. |
| PGx | Paranka_1994 | not_relevant | 0 | 0 | The paper investigates the mechanism of doxorubicin cardiotoxicity in rat cells and mentions emetine only as a comparator for GSH depletion, without reporting any pharmacogenomic effects on emetine's PK or PD. |
| popPK | Pesando_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation in sea urchin embryos using emetine solely as a known comparator/reference agent to the subject drug nordidemnin, with no pharmacokinetic parameters reported. |
| PGx | Pesando_1995 | not_relevant | 0 | 0 | The paper discusses nordidemnin and emetine in sea urchin embryos with no human pharmacogenomic context. |
| popPK | Platzer_1985 | irrelevant | 0 | 0 | The paper is an immunology study where emetine is used only as an in-vitro protein synthesis inhibitor, not as the subject of pharmacokinetic analysis. |
| PGx | Platzer_1985 | not_relevant | 0 | 0 | The paper studies the immunological effects of OKT3 and uses emetine only as a general protein synthesis inhibitor in an experimental assay, not as a therapeutic drug with a pharmacogenomic effect. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper focuses on in-vitro antiviral mechanisms and binding affinities of emetine against SARS-CoV-2, reporting no pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Ren_2022 | not_relevant | 0 | 0 | The paper describes the antiviral mechanism of emetine against SARS-CoV-2 targets but does not contain pharmacogenomic data. |
| popPK | Rosenkranz_2008 | irrelevant | 0 | 0 | In-vitro cytotoxicity/apoptosis study of alkaloids including emetine in trypanosomes and Jurkat cells; no PK disposition parameters reported. |
| popPK | Sato_2020 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of emetogenic mechanisms (CFA and c-Fos expression) in rats, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Sato_2020 | not_relevant | 0 | 0 | The study investigates the neuroanatomical mechanisms of emetogenicity in rats and contains no data on gene variants, genotypes, or phenotypes. |
| popPK | Stanton_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study of hippocampal slices where emetine is used as a protein synthesis inhibitor tool, not as the subject drug for pharmacokinetic characterization. |
| PGx | Stanton_1985 | not_relevant | 0 | 0 | The paper uses emetine as a protein synthesis inhibitor to study norepinephrine-induced potentiation, reporting no pharmacogenomic effects on emetine's own PK/PD. |
| popPK | Sweet_2006 | irrelevant | 0 | 0 | The study is a mechanistic investigation of pancreatic islet metabolism in rats where emetine is used merely as a protein synthesis inhibitor (comparator agent), not as the subject of a pharmacokinetic study. |
| PGx | Sweet_2006 | not_relevant | 0 | 0 | The study investigates mitochondrial function in pancreatic islets and uses emetine only as a protein synthesis inhibitor, containing no pharmacogenomic data or specific PK/PD analysis of emetine. |
| popPK | Tang_2020 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy and mechanism of emetine in a mouse model, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Tang_2020 | not_relevant | 0 | 0 | The paper reports the antiviral efficacy and mechanism of action of emetine in mice, but does not report a pharmacogenomic effect on a PK or PD parameter. |
| popPK | Valipour_2022 | irrelevant | 1 | 0 | The paper is a review focused on the antiviral efficacy and mechanisms of emetine against SARS-CoV-2, containing in-vitro IC50/EC50 values rather than quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) or compartmental models. |
| PGx | Valipour_2022 | not_relevant | 0 | 0 | The paper is a review on the antiviral mechanisms and therapeutic potential of emetine for COVID-19, and it does not report any pharmacogenomic effects of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The study is an in vitro antiviral screening reporting EC50 values, not a pharmacokinetic study with disposition parameters for emetine. |
| PGx | Yang_2020 | not_relevant | 0 | 0 | The paper reports antiviral activity (EC50) of emetine in cell cultures against coronaviruses and contains no information on pharmacogenomics, genetic variants, or individual differences in drug PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bemetine%5D&body=Drug%3A%20emetine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_emetine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
