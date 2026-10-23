<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;deferoxamine&quot;}]"></div>

# deferoxamine

- **generic name:** deferoxamine
- **ATC codes:** `V03AC01`
- **DrugBank:** [DB00746](https://go.drugbank.com/drugs/DB00746) · **PubChem:** [CID 2973](https://pubchem.ncbi.nlm.nih.gov/compound/2973)
- **molar mass:** 560.684 g/mol (C25H48N6O8) — DrugBank
- **groups:** approved, investigational

## About

Deferoxamine is an iron chelating agent used to treat iron overload, including in conditions such as thalassemia and myelodysplastic syndrome. It is an approved medicine and is included on the WHO essential medicines list, so it remains in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419618](https://www.wikidata.org/wiki/Q419618) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wada_2014_CL](drugs/drug_deferoxamine/pd_Wada_2014_CL.md) | luminescence (Fe2+-chelating effect, decrease of chemiluminescence) ← deferoxamine · direct sigmoid Emax (Hill) effect | — | Wada M et al., In vitro screening of Fe2+-chelating ef…, Luminescence : the journal… (2014) | [10.1002/bio.2628](https://doi.org/10.1002/bio.2628) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Bellanti_2016_Ferritin](drugs/drug_deferoxamine/pd_Bellanti_2016_Ferritin.md) | Serum ferritin ← deferoxamine · indirect response — drug stimulates the loss of Serum ferritin | — | Bellanti F et al., Model-Based Optimisation of Deferoxamin…, Pharmaceutical research (2016) | [10.1007/s11095-015-1805-0](https://doi.org/10.1007/s11095-015-1805-0) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Simůnek_2005_DeltaPsim](drugs/drug_deferoxamine/pd_Sim_nek_2005_DeltaPsim.md) | mitochondrial membrane potential protection against H2O2-induced collapse (DeltaPsim) ← deferoxamin · direct Emax (saturable) effect | — | Simůnek T et al., SIH--a novel lipophilic iron chelator--…, Journal of molecular and ce… (2005) | [10.1016/j.yjmcc.2005.05.008](https://doi.org/10.1016/j.yjmcc.2005.05.008) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Van_1999_brain_lipid_peroxidation](drugs/drug_deferoxamine/pd_Van_1999_brain_lipid_peroxidation.md) | brain lipid peroxidation ← deferoxamine · inhibition effect | — | Van Bergen P et al., Hemoglobin and iron-evoked oxidative st…, Free radical research (1999) | [10.1080/10715769900301201](https://doi.org/10.1080/10715769900301201) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:59 | 14:10 | 0/0/0 | 1/3/0 | 0/0/0 | 641,924/8,558 | ollama / glm-5.3-flash | 26 | 1/21 | 26/0 | 0 |

## Coverage

- **PubMed hits:** 219 matched, 115 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jones_2023.pdf` | Jones G et al., Mechanism-Based Pharmacokinetic Modelin…, Molecular pharmaceutics (2023) | popPK | 8 | [10.1021/acs.molpharmaceut.2c00737](https://doi.org/10.1021/acs.molpharmaceut.2c00737) | [36378830](https://pubmed.ncbi.nlm.nih.gov/36378830) | PK modeling of a deferoxamine-based nanochelator in Sprague Dawley rats with compartmental parameters, but no numeric parameter values appear in the evidence provided. |

<sub>queue written 2026-10-07T18:57:26.328052+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baskar_2026 | not_relevant | 0 | 0 | Deferoxamine is only used as a ferroptosis rescue tool; no gene variant/genotype effect on its PK/PD is reported. |
| popPK | Bellanti_2014 | irrelevant | 0 | 0 | This is a population PK study of deferiprone, a different drug; deferoxamine is not the subject. |
| popPK | Bellanti_2017 | irrelevant | 0 | 0 | The paper models deferiprone, a different iron chelator, not deferoxamine; no deferoxamine parameters are reported. |
| popPK | Borella_2022 | irrelevant | 0 | 0 | This is a drug–disease model of ferritin/iron turnover for deferiprone and deferasirox; deferoxamine is only mentioned as a comparator, with no PK parameters for it. |
| popPK | Calvaruso_2014 | irrelevant | 0 | 0 | Efficacy trial comparing ferritin outcomes, no PK disposition parameters for deferoxamine reported. |
| popPK | Cavalcanti_2025 | irrelevant | 0 | 0 | This is a medicinal-chemistry study of spiroacridine antimalarials with no deferoxamine PK data; deferoxamine is not mentioned and no disposition parameters exist. |
| PGx | Cheng_2024 | not_relevant | 0 | 0 | Paper studies iron/senescence in diabetic nephropathy; deferoxamine is only used as an experimental tool with no gene variant effect on PK/PD reported. |
| popPK | Chirnomas_2009 | irrelevant | 2 | 2 | This is a deferasirox PK study; deferoxamine is only used as a diagnostic infusion/probe, and no deferoxamine disposition parameters are reported. |
| PGx | Chirnomas_2009 | not_relevant | 5 | 2 | Pharmacogenomic analysis is mentioned but no gene-variant effect on deferasirox (or deferoxamine) PK/PD parameters is reported in the abstract. |
| PGx | Comini_2008 | not_relevant | 0 | 0 | Paper studies parasite glutaredoxin biology; no gene variant effect on deferoxamine PK/PD parameters in humans. |
| PGx | Dadone_1982 | not_relevant | 3 | 3 | Deferoxamine-induced urinary iron excretion is used only as a diagnostic marker of hemochromatosis genotype, not as a pharmacogenomic effect on deferoxamine PK/PD. |
| popPK | Du_2025 | irrelevant | 0 | 0 | This is a MASLD/senescence gene-signature study with no deferoxamine PK data or parameters. |
| popPK | Duong_1994 | irrelevant | 0 | 0 | Deferoxamine is only used as a pretreatment in a vascular smooth muscle contraction study; no PK parameters reported. |
| popPK | Fang_2020 | irrelevant | 0 | 0 | Natural products chemistry paper; deferoxamine E is an isolated siderophore with bioactivity assays, no PK parameters. |
| PGx | Febbraro_2012 | not_relevant | 0 | 0 | No gene variant/genotype effect on deferoxamine PK/PD; deferoxamine is only used as an iron chelator tool in vitro. |
| PGx | Febbraro_2013 | not_relevant | 0 | 0 | Animal efficacy study of intranasal deferoxamine with no gene variant/genotype effects on PK or PD parameters. |
| popPK | Fedulov_2026 | irrelevant | 0 | 0 | A theoretical PFAS neurotoxicity review with no deferoxamine PK data or parameters. |
| popPK | Finogenova_2026 | irrelevant | 0 | 0 | Review of radiolabeled nanoparticle theranostics; deferoxamine is not mentioned and no PK parameters for it appear. |
| popPK | Goldstein_2003 | irrelevant | 0 | 0 | In-vitro neurotoxicity study where deferoxamine is only a protective chelator; no PK parameters reported. |
| popPK | Graier_1990 | irrelevant | 0 | 0 | Deferoxamine is only used as an Al3+ chelator tool in an in vitro cell-signaling study; no PK parameters are reported. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Halcrow_2024 | irrelevant | 0 | 0 | Deferoxamine is only used as an iron-chelator tool in in-vitro cell experiments; no PK parameters for deferoxamine are reported. |
| PGx | Harmatz_2008 | not_relevant | 2 | 3 | No gene variant/genotype effect on deferoxamine PK/PD is reported; "genotype" refers to HCV viral genotype, and DFO molar efficacy changes relate to liver inflammation, not genetics. |
| PGx | Howley_2023 | not_relevant | 0 | 0 | Paper studies DFO's effect on ALA-PpIX fluorescence in cell lines; no gene variant/genotype effect on DFO PK/PD parameters reported. |
| popPK | Jones_2023 | relevant | 8 | 2 | PK modeling of a deferoxamine-based nanochelator in Sprague Dawley rats with compartmental parameters, but no numeric parameter values appear in the evidence provided. |
| popPK | Kim_2023 | irrelevant | 0 | 0 | Deferoxamine is only used as a positive-control ferroptosis inhibitor in a mechanistic study; no PK parameters are reported. |
| popPK | Knippenberg_2016 | irrelevant | 0 | 0 | The paper concerns rifampin, fusidic acid, and ciprofloxacin; deferoxamine is not mentioned at all. |
| PGx | Kontoghiorghes_2010 | not_relevant | 2 | 1 | Abstract mentions enzyme interactions with deferasirox generally, but no gene variant effect on deferoxamine PK/PD parameters is reported. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | This is a review of iodine-124 radiochemistry and immunoPET; deferoxamine appears only as a chelator for 89Zr labeling, with no PK parameters for deferoxamine itself. |
| PGx | Li_2022_2 | not_relevant | 0 | 0 | Paper is about imaging ABCG2 expression in xenografts; deferoxamine is only a chelator for radiolabeling, no gene-variant effect on deferoxamine PK/PD reported. |
| popPK | Li_2026 | irrelevant | 0 | 0 | In vitro E. coli evolution study of drug resistance; deferoxamine is only one of many tested drugs, with no PK parameters. |
| popPK | Lima_2008 | irrelevant | 0 | 0 | In-vitro cytotoxicity study where deferoxamine is only a co-additive; no PK parameters reported. |
| PGx | Lin_2008 | not_relevant | 0 | 0 | Deferoxamine is used only as an HIF-1 stabilizer in a cell-based screen; no gene variant effect on its PK/PD is reported. |
| popPK | Livermore_2013 | irrelevant | 0 | 0 | Deferoxamine is used only as a hypoxia-mimetic treatment in an in vitro carotid body cell study; no PK parameters are reported. |
| PGx | Mansi_2022 | not_relevant | 0 | 0 | Deferoxamine is only a comparator iron chelator; no gene variant effect on its PK/PD parameters is reported. |
| popPK | Mierzwicka_2024 | irrelevant | 0 | 0 | Deferoxamine is only used as a chelator/linker for 68Ga radiolabeling of PD-1 imaging probes; no PK parameters for deferoxamine itself are reported. |
| popPK | Momin_2022 | irrelevant | 0 | 0 | Deferoxamine appears only as the PET chelator (p-SCN-Bn-Deferoxamine) for labeling IL-2 fusion proteins; no deferoxamine PK parameters are reported, and the numeric values present concern IL-2 fusions. |
| PGx | Nazari_2012 | not_relevant | 0 | 0 | No genetic variant/genotype is studied; deferoxamine is only used as an iron chelator in a toxicity model. |
| popPK | Neiveyans_2019 | irrelevant | 0 | 0 | This is a PK study of an anti-TfR1 antibody (H7), not deferoxamine; DFO is only used as an iron chelator comparator in vitro, and PK values are in Table S1/figures not provided. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | This is a review of radiomitigators with no pharmacokinetic parameters for deferoxamine reported. |
| popPK | Odje_2024 | irrelevant | 0 | 0 | This is a review of Cell Painting assays and machine learning for compound activity/toxicity prediction, with no deferoxamine PK parameters reported. |
| PGx | Ogino_2011 | not_relevant | 1 | 2 | Deferoxamine is only used as a ferrochelatase-inhibition tool; no gene variant/genotype effect on its PK/PD is reported. |
| PGx | Olsen_2026 | not_relevant | 2 | 3 | DFO is used as an iron chelator modulating PpIX in cell lines; no gene variant/genotype effect on DFO's own PK/PD parameters is reported. |
| PGx | Ooko_2015 | not_relevant | 2 | 3 | Deferoxamine is used only as an experimental iron-chelation tool to confirm ferroptosis of artemisinins; no gene variant/genotype effect on deferoxamine's own PK or PD parameters is reported. |
| popPK | Pang_2025 | irrelevant | 0 | 0 | This is a lamprey single-cell atlas/Natterin adipose browning study; deferoxamine is only an iron-regulating comparator in cell experiments, and no deferoxamine PK parameters are reported (the two-compartment PK mention concerns NATTERIN and values are in supplementary figures not provided). |
| PGx | Piffaretti_2019 | not_relevant | 0 | 0 | Deferoxamine is used only as a pharmacological tool to modulate PpIX fluorescence; no gene variant effect on deferoxamine PK/PD is reported. |
| PGx | Piffaretti_2020 | not_relevant | 0 | 0 | Deferoxamine is only used as an experimental modulator of PpIX fluorescence; no gene variant effect on its PK/PD is reported. |
| PGx | Pless_2012 | not_relevant | 0 | 0 | Paper studies deferoxamine as a cell-protective iron chelator in hepatocyte cold storage, with no gene variant/genotype/phenotype effect on PK or PD parameters. |
| popPK | Polymeris_2025 | irrelevant | 0 | 0 | This is a CT imaging/outcome study of perihematomal edema in ICH patients from the i-DEF trial; deferoxamine is only the trial treatment, with no PK parameters reported. |
| popPK | Ratz_1990 | irrelevant | 0 | 0 | Deferoxamine is only a chelator of contaminating aluminum in an in vitro vascular physiology study; no PK parameters reported. |
| popPK | Regan_1993 | irrelevant | 0 | 0 | In-vitro cell culture toxicity study; deferoxamine is only a protective chelator, no PK parameters. |
| popPK | Regan_1996 | irrelevant | 0 | 0 | Deferoxamine is only used as a mechanistic iron chelator in a neurotoxicity study; no PK parameters are reported. |
| popPK | Regan_1998 | irrelevant | 0 | 0 | In-vitro neurotoxicity study; deferoxamine is only a protective chelator, no PK parameters reported. |
| popPK | Regan_2004 | irrelevant | 0 | 0 | In vitro cell culture study of hemin neurotoxicity; deferoxamine is only a chelator treatment with no PK parameters reported. |
| popPK | Salamat_2026 | irrelevant | 0 | 0 | A review of chitosan injectable hydrogels with no deferoxamine PK parameters or numeric disposition values. |
| PGx | Salazar_2025 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on deferoxamine PK/PD; paper studies engineered antibody variants, not pharmacogenomics. |
| popPK | San-Martín-Martínez_2022 | irrelevant | 2 | 0 | Narrative review discussing PK qualitatively with no numeric disposition parameters for deferoxamine reported. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | Cell biology study of polyamines and ferroptosis; deferoxamine is only used as an iron chelator reagent, with no PK parameters reported. |
| popPK | Simůnek_2005 | irrelevant | 0 | 0 | In-vitro cytoprotection study of a different chelator (SIH); deferoxamine is only a comparator with an EC50, no PK parameters. |
| PGx | Sinakos_2017 | not_relevant | 0 | 0 | Paper reports DAA efficacy/safety in thalassemia patients; no gene variant effect on deferoxamine PK/PD parameters. |
| popPK | Svoboda_1986 | irrelevant | 0 | 0 | In-vitro enzyme activity study; deferoxamine (desferal) is only a chelating agent used mechanistically, with no PK parameters. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | Chemoproteomic study of cysteine-reactive drugs; deferoxamine is not a PK subject and no disposition parameters are reported. |
| PGx | Uchijima_2026 | not_relevant | 2 | 3 | Deferoxamine is used only as a ferroptosis-inhibitor tool; no gene variant/genotype effect on deferoxamine PK/PD parameters is reported. |
| popPK | Van_1999 | irrelevant | 0 | 0 | Deferoxamine is only used as a chelating tool with an IC50 for inhibiting lipid peroxidation; no PK disposition parameters are reported. |
| popPK | Vanderveldt_2004 | irrelevant | 0 | 0 | Deferoxamine is only used as an iron chelator in an in-vitro neurotoxicity assay; no PK parameters are reported. |
| popPK | Visser_2004 | irrelevant | 0 | 0 | DFO is only a modulator of transferrin receptor expression in vitro; no deferoxamine PK parameters are reported. |
| popPK | Wada_2014 | irrelevant | 0 | 0 | In vitro chelation assay only; deferoxamine is a test compound with EC50 values, no pharmacokinetic disposition parameters. |
| PGx | Wang_2017 | not_relevant | 2 | 3 | DFO's effect on PpIX fluorescence is a drug-drug/cell biology interaction, not a gene variant/genotype effect on DFO PK/PD. |
| popPK | Wiggers_2008 | irrelevant | 0 | 0 | Deferoxamine is only used as an in-vitro pharmacological tool (300 µM) in a vascular reactivity study; no PK parameters are reported. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | Medicinal chemistry study of new chelator compounds; deferoxamine only mentioned as a comparator with no PK parameters. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | This is a ferroptosis/cancer biology study of vorapaxar; deferoxamine appears only as an in-vitro iron chelator control, with no PK parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
