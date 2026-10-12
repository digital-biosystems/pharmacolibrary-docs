<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;elosulfase alfa&quot;}]"></div>

# elosulfase alfa

- **generic name:** elosulfase alfa
- **ATC codes:** `A16AB12`
- **DrugBank:** [DB09051](https://go.drugbank.com/drugs/DB09051) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Elosulfase alfa is an enzyme replacement therapy used to treat mucopolysaccharidosis IV. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21011232](https://www.wikidata.org/wiki/Q21011232) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:32 | 1:40 | 0/0/0 | 0/0/0 | 0/0/0 | 51,325/2,307 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/5 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 47 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yan_2025.pdf` | Yan G et al., Depolymerization of oyster glycosaminog…, Food research international… (2025) | pd | 4 | [10.1016/j.foodres.2025.116008](https://doi.org/10.1016/j.foodres.2025.116008) | [40032484](https://www.ncbi.nlm.nih.gov/pubmed/40032484) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T10:32:15.572688+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellin_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on bovine granulosa cells and FSH, unrelated to the pharmacokinetics of elosulfase_alfa. |
| PD | Bellin_1983 | not_relevant | 0 | 0 | The paper studies FSH dose-response in bovine granulosa cells and does not mention elosulfase alfa. |
| popPK | Bergefall_2005 | irrelevant | 0 | 0 | The paper discusses the antiviral properties of chondroitin sulfate and has no relation to the pharmacokinetics of elosulfase alfa. |
| PD | Bergefall_2005 | not_relevant | 0 | 0 | The paper discusses the antiviral activity of chondroitin sulfate (CS-E) against herpes simplex virus, not elosulfase alfa. |
| popPK | Berger_2018 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (exercise capacity) for elosulfase alfa but contains no pharmacokinetic parameters or disposition data. |
| PD | Berger_2018 | not_relevant | 2 | 1 | The paper reports clinical outcomes (CPET metrics) for two fixed doses but does not provide drug concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Bustos_1995 | irrelevant | 0 | 0 | The paper studies Cyclosporin A in nephrosis and does not involve elosulfase alfa or report any pharmacokinetic parameters. |
| PD | Bustos_1995 | not_relevant | 0 | 0 | The paper studies Cyclosporin A, not elosulfase alfa. |
| popPK | Carmon_2026 | irrelevant | 0 | 0 | The study reports longitudinal growth outcomes (height/weight SDS) in MPS patients, not pharmacokinetic parameters for elosulfase alfa. |
| popPK | Cavalcante_2003 | irrelevant | 0 | 0 | The paper is a review on proteoglycans in the developing brain and does not contain any pharmacokinetic data for elosulfase alfa. |
| PD | Cavalcante_2003 | not_relevant | 0 | 0 | The paper studies sulfated proteoglycans in neuronal migration and does not involve the drug elosulfase alfa or any pharmacodynamic modeling. |
| popPK | Cholas_2012 | irrelevant | 0 | 0 | The paper is a study on spinal cord injury treatment using collagen scaffolds and does not involve elosulfase_alfa or pharmacokinetic parameters. |
| PD | Cholas_2012 | not_relevant | 0 | 0 | The paper studies spinal cord injury in rats using collagen scaffolds and does not involve elosulfase alfa or any pharmacodynamic modeling. |
| popPK | Chorążewska_2026 | irrelevant | 0 | 0 | The paper describes a protein-drug conjugate (TriFHS-MMAE) for pancreatic cancer and does not involve elosulfase alfa or its pharmacokinetics. |
| PD | Chorążewska_2026 | not_relevant | 0 | 0 | The paper focuses on the mechanism of endocytosis and delivery of a protein-drug conjugate (TriFHS-MMAE) and does not report pharmacodynamic or exposure-response relationships for elosulfase alfa. |
| popPK | Davighi_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on pharmacological chaperones for elosulfase alfa and does not report any pharmacokinetic parameters. |
| PD | Davighi_2025 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro characterization of pharmacological chaperones for elosulfase alfa, reporting binding IC50s for the chaperones, but does not report any pharmacodynamic or exposure-response relationship for elosulfase alfa itself. |
| popPK | Dvorak-Ewell_2010 | irrelevant | 0 | 0 | The paper studies recombinant human GALNS (an enzyme for MPS IVA), not the drug elosulfase alfa (an enzyme for MPS VI). |
| popPK | Engbring_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study on cell surface receptors and metastasis in melanoma cells, unrelated to the pharmacokinetics of elosulfase_alfa. |
| PD | Engbring_2002 | not_relevant | 0 | 0 | The paper characterizes a cell surface receptor for a synthetic peptide (AG73) in a melanoma model and does not involve the drug elosulfase alfa or report any pharmacodynamic exposure-response relationship. |
| popPK | Gullbrand_2024 | irrelevant | 0 | 0 | The paper is a study on intervertebral disc degeneration in goats and does not involve elosulfase_alfa or any pharmacokinetic analysis. |
| PD | Gullbrand_2024 | not_relevant | 0 | 0 | The paper describes a large animal model of disc degeneration using chondroitinase ABC and does not involve elosulfase alfa or report any pharmacodynamic or exposure-response relationships for the target drug. |
| popPK | Haddley_2014 | irrelevant | 0 | 0 | The text is a general overview of the drug and disease without any quantitative pharmacokinetic parameters or models. |
| PGx | Hasanali_2021 | not_relevant | 0 | 0 | The paper investigates gemcitabine resistance in bladder cancer, not elosulfase_alfa. |
| popPK | Hendriksz_2016 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetics but does not provide original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Hendriksz_2016 | not_relevant | 2 | 0 | The paper is a review that qualitatively discusses pharmacodynamics and efficacy outcomes (e.g., 6MWT, FDT) but does not report any numeric PD parameters (Emax, EC50, etc.) or concentration-effect curves. |
| popPK | Hendriksz_2018 | irrelevant | 2 | 0 | The paper is a long-term safety and clinical outcome report that mentions PK parameters (half-life, clearance) qualitatively in the context of immunogenicity but does not provide quantitative PK values or a compartmental model in the provided evidence. |
| popPK | Jain_2020 | irrelevant | 0 | 0 | The study focuses on in vitro hydrogel release kinetics and stability of rhGALNS, not in vivo pharmacokinetic parameters (CL, V, t1/2) for elosulfase alfa. |
| popPK | Khanteymoori_2025 | irrelevant | 0 | 0 | The paper is a systematic review of Chondroitinase ABC for spinal cord injury and does not involve elosulfase alfa or report any pharmacokinetic parameters. |
| PD | Khanteymoori_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of Chondroitinase ABC in spinal cord injury models and does not report any pharmacodynamic or exposure-response data for elosulfase alfa. |
| PGx | Kheirollahi_2017 | not_relevant | 0 | 0 | The paper discusses protein engineering of chondroitinase ABC I, not the pharmacogenomics of elosulfase alfa. |
| popPK | Leal_2025 | irrelevant | 0 | 0 | The paper is a review of treatment strategies for MPS IVA and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for elosulfase alfa. |
| PGx | Leal_2025 | not_relevant | 0 | 0 | The paper is a review of treatment strategies for MPS IVA and does not report pharmacogenomic effects on the PK/PD of elosulfase alfa. |
| popPK | Link_2021 | irrelevant | 0 | 0 | The paper is an in-vitro biomechanical study on chondroitinase ABC and cartilage integration, unrelated to the pharmacokinetics of elosulfase alfa. |
| PD | Link_2021 | not_relevant | 0 | 0 | The paper studies chondroitinase ABC, not elosulfase alfa, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Long_2017 | irrelevant | 0 | 0 | The paper focuses on long-term immunogenicity and efficacy (pharmacodynamics) rather than pharmacokinetic disposition parameters. |
| PD | Long_2017 | not_relevant | 1 | 0 | The paper focuses on immunogenicity and reports no relationship between antibody titers and efficacy metrics, providing no numeric PD parameters or exposure-response analysis. |
| popPK | Lyseng-Williamson_2014 | irrelevant | 0 | 0 | The paper is a clinical review focusing on efficacy and safety, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for elosulfase alfa. |
| PD | Lyseng-Williamson_2014 | not_relevant | 2 | 1 | The text is a qualitative review that mentions urinary KS as a pharmacodynamic biomarker and reports clinical efficacy (6-min walk test) but does not provide numeric PD parameters, concentration-effect curves, or dose-response modeling data. |
| popPK | Maeda_1996 | irrelevant | 0 | 0 | The paper describes the binding of a proteoglycan to pleiotrophin in rat brain and contains no pharmacokinetic data for elosulfase alfa. |
| PD | Maeda_1996 | not_relevant | 0 | 0 | The paper describes the binding affinity (Kd) and inhibition (IC50) of a proteoglycan (6B4) for a growth factor (pleiotrophin), not the pharmacodynamics of the drug elosulfase alfa. |
| popPK | Melton_2017 | irrelevant | 0 | 0 | The paper focuses on the impact of neutralizing antibodies on efficacy and pharmacodynamics, not on quantitative pharmacokinetic disposition parameters. |
| PD | Melton_2017 | not_relevant | 0 | 0 | The paper reports a lack of correlation between neutralizing antibody titers and efficacy/PD, but does not provide a concentration-effect or dose-response model with numeric PD parameters for elosulfase alfa. |
| popPK | Muniswami_2018 | irrelevant | 0 | 0 | The paper is a study on spinal cord injury in rats involving cell transplantation and chondroitinase, with no mention of elosulfase alfa or pharmacokinetic parameters. |
| PD | Muniswami_2018 | not_relevant | 0 | 0 | The paper studies cell transplantation and chondroitinase in spinal cord injury, not elosulfase alfa. |
| popPK | Natori_2008 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on endoplasmic reticulum stress and chondroitin sulfate in glial cells, with no mention of elosulfase alfa or pharmacokinetic parameters. |
| PD | Natori_2008 | not_relevant | 0 | 0 | The paper investigates the effect of ER stressors on chondroitin sulfate expression in cell lines and does not involve elosulfase alfa or any pharmacodynamic modeling. |
| popPK | Nurcombe_1985 | irrelevant | 0 | 0 | The paper is a study on embryonic muscle cell biology and motoneurone survival, unrelated to the pharmacokinetics of elosulfase_alfa. |
| PD | Nurcombe_1985 | not_relevant | 0 | 0 | The paper studies embryonic chick muscle and motoneurone survival, not the drug elosulfase alfa. |
| popPK | OConnell_2014 | irrelevant | 0 | 0 | The paper studies chondroitinase ABC in tissue engineering and does not involve elosulfase alfa or pharmacokinetic parameters. |
| PD | OConnell_2014 | not_relevant | 0 | 0 | The paper studies chondroitinase ABC, not elosulfase alfa. |
| PGx | Paganini_2023 | not_relevant | 0 | 0 | The paper investigates biomarkers for diastrophic dysplasia and does not mention elosulfase_alfa or any pharmacokinetic/pharmacodynamic parameters. |
| PD | Qi_2014 | not_relevant | 2 | 1 | The study assesses PK parameters and graphically explores associations with PD endpoints (uKS, 6MWT) but explicitly concludes there are no associations and does not report a fitted PD model or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Qi_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vestronidase alfa, not elosulfase alfa. |
| popPK | Razin_1983 | irrelevant | 0 | 0 | The paper is an in-vitro immunology study on mast cell mediator release and does not involve the drug elosulfase_alfa or pharmacokinetic parameters. |
| PD | Razin_1983 | not_relevant | 0 | 0 | The paper studies mast cell degranulation and is unrelated to the drug elosulfase alfa. |
| PGx | Shahaboddin_2017 | not_relevant | 0 | 0 | The paper discusses protein engineering of Chondroitinase ABC I, not the pharmacogenomics of elosulfase alfa. |
| popPK | Takahashi_1996 | irrelevant | 0 | 0 | The study investigates the chemonucleolytic effects of chondroitinase ABC in rabbits and does not involve elosulfase alfa or report any pharmacokinetic parameters. |
| PD | Takahashi_1996 | not_relevant | 0 | 0 | The paper studies chondroitinase ABC, not elosulfase alfa. |
| popPK | Tomatsu_2007 | irrelevant | 0 | 0 | The study investigates recombinant human N-acetylgalactosamine-6-sulfate sulfatase (GALNS) for MPS IVA, not elosulfase alfa (which treats MPS VI). |
| popPK | Volpi_1998 | irrelevant | 0 | 0 | The paper describes the biochemical characterization of a proteoglycan in molluscs and is unrelated to the pharmacokinetics of elosulfase alfa. |
| PD | Volpi_1998 | not_relevant | 0 | 0 | The paper describes the biochemical characterization of a proteoglycan from a mollusc and contains no information regarding elosulfase alfa or any pharmacodynamic modeling. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper describes protein engineering of chondroitinase for industrial production and does not involve elosulfase alfa or pharmacogenomics. |
| popPK | Wasteson_1973 | irrelevant | 0 | 0 | The paper describes an assay for sulphated polysaccharide biosynthesis and is unrelated to the pharmacokinetics of elosulfase alfa. |
| PD | Wasteson_1973 | not_relevant | 0 | 0 | The paper studies the effects of somatomedin on cell cultures, not elosulfase alfa. |
| popPK | Yan_2025 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Yan_2025 | not_relevant | 0 | 0 | The paper focuses on oyster glycosaminoglycans and alpha-glucosidase inhibition, not elosulfase alfa. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper studies chondroitin sulfate oligosaccharides for osteoporosis and does not involve elosulfase alfa or pharmacokinetic parameters. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper studies chondroitin sulfate oligosaccharides in rats, not elosulfase alfa, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Álvarez_2019 | irrelevant | 0 | 0 | The study is an in vitro formulation and cellular uptake study of elosulfase alfa-loaded nanoparticles, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
