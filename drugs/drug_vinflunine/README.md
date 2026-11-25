<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinflunine&quot;}]"></div>

# vinflunine

- **generic name:** vinflunine
- **ATC codes:** `L01CA05`
- **DrugBank:** [DB11641](https://go.drugbank.com/drugs/DB11641) · **PubChem:** none
- **molar mass:** 816.944 g/mol (C45H54F2N4O8) — DrugBank
- **groups:** approved, investigational

## About

Vinflunine is a vinca alkaloid used to treat bladder cancer. It is administered by intravenous injection. It is authorised in the European Union for the treatment of urologic neoplasms.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2195393](https://www.wikidata.org/wiki/Q2195393), [Wikipedia](https://en.wikipedia.org/wiki/Vinflunine?oldid=1369499762) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vinflunine | parent | 816.944 | C45H54F2N4O8 | DrugBank | — | Delord_2013 |
| 4-O-deacetylvinflunine | metabolite | 774.906 | C43H52F2N4O7 | PubChem | [85098710](https://pubchem.ncbi.nlm.nih.gov/compound/85098710) | Delord_2013 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Delord_2013_reference](drugs/drug_vinflunine/Vinflunine_Delord2013_reference.md) | — | parent + metabolite (no model) | 1 | Delord JP et al., Phase I and pharmacokinetic study of IV…, Investigational new drugs (2013) | [10.1007/s10637-012-9878-7](https://doi.org/10.1007/s10637-012-9878-7) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Schmitt_2018_reference](drugs/drug_vinflunine/Vinflunine_Schmitt2018_reference.md) | — | 1-compartment (no model) | 0 | Schmitt A et al., Better characterization of vinflunine p…, British journal of clinical… (2018) | [10.1111/bcp.13518](https://doi.org/10.1111/bcp.13518) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Bonfil_2002_IC50](drugs/drug_vinflunine/pd_Bonfil_2002_IC50.md) | Chemotherapy cytotoxicity against MB49 murine bladder cancer cells ← vinflunine · inhibition effect | — | Bonfil RD et al., Higher antitumor activity of vinflunine…, Urologic oncology (2002) | [10.1016/s1078-1439(02)00184-9](https://doi.org/10.1016/s1078-1439(02)00184-9) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Bonfil_2002_In_vitro_invasiveness_of_MB49_cells](drugs/drug_vinflunine/pd_Bonfil_2002_In_vitro_invasiveness_of_MB49_cells.md) | In vitro invasiveness of MB49 cells ← vinflunine · inhibition effect | — | Bonfil RD et al., Higher antitumor activity of vinflunine…, Urologic oncology (2002) | [10.1016/s1078-1439(02)00184-9](https://doi.org/10.1016/s1078-1439(02)00184-9) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Friberg_2002_leukocyte](drugs/drug_vinflunine/pd_Friberg_2002_leukocyte.md) | leukocyte ← vinflunine · disease-progression model | — | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Friberg_2002_neutrophil](drugs/drug_vinflunine/pd_Friberg_2002_neutrophil.md) | neutrophil ← vinflunine · disease-progression model | — | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Ngan_2001_inhibition_of_HeLa_cell_proliferation](drugs/drug_vinflunine/pd_Ngan_2001_inhibition_of_HeLa_cell_proliferation.md) | inhibition of HeLa cell proliferation ← vinflunine · direct Emax (saturable) effect | — | Ngan VK et al., Mechanism of mitotic block and inhibiti…, Molecular pharmacology (2001) | [10.1124/mol.60.1.225](https://doi.org/10.1124/mol.60.1.225) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Schmitt_2018_ANC](drugs/drug_vinflunine/pd_Schmitt_2018_ANC.md) | absolute neutrophil counts ← vinflunine · inhibition effect | — | Schmitt A et al., Better characterization of vinflunine p…, British journal of clinical… (2018) | [10.1111/bcp.13518](https://doi.org/10.1111/bcp.13518) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Erjala_2005_IC50](drugs/drug_vinflunine/pd_Erjala_2005_IC50.md) | IC50 biomarker turnover ← vinflunine | — | Erjala K et al., Head and neck carcinoma cell lines are…, Anticancer research (2005) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:38 | 0:03 | 1/1/0 | 7/0/0 | 0/0/0 | 4,067/168 | einfracz / qwen3.8-27b | 1 | 1/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2008 | irrelevant | 0 | 0 | The study is an in vitro mechanistic/cytotoxicity investigation reporting IC50 and cell death markers, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Aggarwal_2008 | not_relevant | 0 | 0 | The study compares drug sensitivities in cell lines and reports PD markers like G2/M arrest and apoptosis, but it does not report a pharmacogenomic effect (gene variant) on PK/PD parameters. |
| popPK | Bamias_2021 | irrelevant | 0 | 0 | The paper is a pharmacogenomic cohort study focusing on the ERCC1 polymorphism and survival outcomes in urothelial cancer patients, with no pharmacokinetic data or parameters reported for vinflunine. |
| PGx | Bamias_2021 | not_relevant | 0 | 0 | The paper studies the effect of ERCC1 polymorphism on survival outcomes (CSS, PFS, OS) in urothelial cancer patients, and while it notes that 19.4% of patients received vinflunine, it does not report any analysis of vinflunine-specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, response rate) or their modification by genotype. |
| popPK | Bonfil_2002 | irrelevant | 0 | 0 | The study reports in vivo antitumor efficacy and in vitro cytotoxicity (IC50) but contains no pharmacokinetic disposition parameters (CL, V, T1/2) for vinflunine. |
| PGx | Bonfil_2002 | not_relevant | 0 | 0 | The paper describes the preclinical efficacy of vinflunine in a murine model without mentioning any pharmacogenomic effects on PK/PD parameters. |
| popPK | Chan_2014 | irrelevant | 9 | 0 | The paper is a relevant PK study for vinflunine, but the abstract states that population PK analysis was performed to evaluate DDI without providing any specific quantitative parameter values (CL, V, etc.) in the provided evidence. |
| PGx | Chan_2014 | not_relevant | 0 | 0 | The paper reports on a pharmacokinetic drug-drug interaction (DDI) between vinflunine and epirubicin, not on pharmacogenomic effects or genetic variants. |
| PGx | Delord_2013 | not_relevant | 0 | 0 | The study investigates the impact of liver dysfunction (clinical phenotype) on vinflunine PK, but does not report data on gene variants or genotypes (pharmacogenomics). |
| popPK | Erjala_2005 | irrelevant | 0 | 0 | The study is an in-vitro cell line sensitivity assay reporting IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Erjala_2005 | not_relevant | 0 | 0 | The study evaluates in vitro sensitivity of cancer cell lines to vinflunine without investigating any genetic variants or pharmacogenomic factors. |
| popPK | Estève_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating cellular resistance mechanisms (tubulin and Bcl-2) and does not report pharmacokinetic parameters. |
| PGx | Estève_2006 | not_relevant | 0 | 0 | The study investigates cellular resistance mechanisms (tubulin composition, Bcl-2) in cancer cell lines, not pharmacogenomic variations in human PK/PD parameters. |
| popPK | Friberg_2002 | irrelevant | 2 | 0 | This is a pharmacodynamic model of chemotherapy-induced myelosuppression (neutrophil counts), not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for vinflunine. |
| PGx | Friberg_2002 | not_relevant | 0 | 0 | The paper focuses on a PK/PD model for myelosuppression and does not investigate gene variants or pharmacogenomics. |
| popPK | Kerioui_2022 | irrelevant | 0 | 0 | The paper analyzes tumor lesion dynamics and survival, not vinflunine pharmacokinetics. |
| PD | Kerioui_2022 | not_relevant | 0 | 0 | The paper analyzes tumor dynamics and survival for atezolizumab and chemotherapy, but does not report any pharmacodynamic or exposure-response relationship for vinflunine. |
| popPK | Kruczynski_1998 | irrelevant | 0 | 0 | The study is purely in-vitro/mechanistic and reports no quantitative pharmacokinetic parameters. |
| PGx | Kruczynski_1998 | not_relevant | 0 | 0 | The paper describes the mechanism of action of vinflunine in vitro without involving any human genetic variants or pharmacogenomic effects. |
| popPK | Matsubara_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study comparing erdafitinib to chemotherapy (which may include vinflunine) and does not report pharmacokinetic parameters for vinflunine. |
| PD | Matsubara_2025 | not_relevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of erdafitinib versus chemotherapy (including vinflunine) and does not report any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for vinflunine. |
| PGx | Matsubara_2025 | not_relevant | 0 | 0 | The paper analyzes the clinical efficacy and safety of erdafitinib versus chemotherapy (vinflunine) in a specific population, but it does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of vinflunine. |
| popPK | Ng_2011 | irrelevant | 1 | 0 | This is a narrative review that discusses vinflunine pharmacokinetics qualitatively (metabolism, excretion) without providing specific numeric quantitative parameters (CL, V, t1/2) or a population model in the provided text. |
| PGx | Ng_2011 | not_relevant | 1 | 0 | The paper is a general pharmacological review of vinflunine and does not report any pharmacogenomic effects (gene variants/genotypes) on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ngan_2001 | irrelevant | 1 | 0 | The paper is a mechanistic study of mitotic block in cell lines, reporting in-vitro potency (IC50) and intracellular concentrations, but it does not contain pharmacokinetic disposition parameters (e.g., clearance, volume of distribution) or a PK model. |
| PGx | Ngan_2001 | not_relevant | 0 | 0 | The study compares microtubule dynamics and cellular pharmacodynamics of different Vinca alkaloids, but does not investigate gene variants or pharmacogenomic effects. |
| popPK | Pourroy_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis pathways and does not report any pharmacokinetic parameters. |
| PGx | Pourroy_2004 | not_relevant | 0 | 0 | The paper investigates the mechanism of action (apoptosis pathways) in neuroblastoma cells and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Schmitt_2018 | not_relevant | 0 | 0 | The paper analyzes clinical and physiological covariates (renal function, body size) but does not report any pharmacogenomic analysis or gene variant effects. |
| popPK | Vallo_2015 | irrelevant | 1 | 0 | This is an in vitro cytotoxicity/sensitivity study in cell lines, not a pharmacokinetic study, and no disposition parameters for vinflunine are reported. |
| PGx | Vallo_2015 | not_relevant | 0 | 0 | The paper studies drug resistance in cell lines and does not report a pharmacogenomic effect of a specific gene variant on the PK or PD of vinflunine in patients. |
| popPK | Zhao_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 isoforms involved in vinflunine metabolism using human liver microsomes, reporting no in-vivo pharmacokinetic disposition parameters such as clearance or volume. |
| PGx | Zhao_2007 | not_relevant | 0 | 0 | The paper studies vinflunine metabolism using chemical CYP450 inhibitors in human liver microsomes, but it does not report a pharmacogenomic effect (gene variant/genotype/phenotype) on PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinflunine%5D&body=Drug%3A%20vinflunine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinflunine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 05:37 UTC</sub>
