# carbenoxolone

- **generic name:** carbenoxolone
- **ATC codes:** `A02BX01`
- **DrugBank:** [DB02329](https://go.drugbank.com/drugs/DB02329)
- **groups:** experimental

## About

**Description.** An agent derived from licorice root. It is used for the treatment of digestive tract ulcers, especially in the stomach. Antidiuretic side effects are frequent, but otherwise the drug is low in toxicity. [PubChem]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 14:52 | 16:37 | 0/0/0 | 5/1/0 | 0/0/0 | 244,460/8,335 | ollama / qwen3.8:27b-mtp-q8_0 | 22 | 4/18 | 21/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Achilli_2014](drugs/drug_carbenoxolone/pd_Achilli_2014_GJIC_inhibition.md) | Achilli TM et al., Multilayer spheroids to quantify drug u…, Molecular pharmaceutics (2014) | [10.1021/mp500002y](https://doi.org/10.1021/mp500002y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Achilli_2014](drugs/drug_carbenoxolone/pd_Achilli_2014_calcein_uptake.md) | Achilli TM et al., Multilayer spheroids to quantify drug u…, Molecular pharmaceutics (2014) | [10.1021/mp500002y](https://doi.org/10.1021/mp500002y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Choi_2018](drugs/drug_carbenoxolone/pd_Choi_2018_Gap_junctional_intercellular_communication_GJIC_ac.md) | Choi EJ et al., Gambogic Acid and Its Analogs Inhibit G…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00814](https://doi.org/10.3389/fphar.2018.00814) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mosquera_2018](drugs/drug_carbenoxolone/pd_Mosquera_2018_11_HSD1.md) | Mosquera C et al., Pentacyclic Triterpenes from Cecropia t…, Molecules (Basel, Switzerla… (2018) | [10.3390/molecules23061444](https://doi.org/10.3390/molecules23061444) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Okada_2015](drugs/drug_carbenoxolone/pd_Okada_2015_unknown.md) | Okada Y et al., Carbenoxolone-sensitive and cesium-perm…, Biochemistry and biophysics… (2015) | [10.1016/j.bbrep.2015.09.010](https://doi.org/10.1016/j.bbrep.2015.09.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Xiao_2004](drugs/drug_carbenoxolone/pd_Xiao_2004_unknown.md) | Xiao D et al., Cortisol-mediated regulation of uterine…, American journal of physiol… (2004) | [10.1152/ajpheart.00805.2003](https://doi.org/10.1152/ajpheart.00805.2003) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Liu_2012](drugs/drug_carbenoxolone/pd_Liu_2012_loss_of_righting_reflex.md) | Liu Z et al., The gap junction blocker carbenoxolone…, Neural regeneration research (2012) | [10.3969/j.issn.1673-5374.2012.07.002](https://doi.org/10.3969/j.issn.1673-5374.2012.07.002) |

## Coverage

- **PubMed hits:** 82 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Muramatsu_1984.pdf` | Muramatsu M et al., Effect of 2'-carboxymethoxy-4,4'-bis(3-…, Biochemical pharmacology (1984) | pd | 4 | [10.1016/0006-2952(84)90636-1](https://doi.org/10.1016/0006-2952(84)90636-1) | [6466376](https://www.ncbi.nlm.nih.gov/pubmed/6466376) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-10T14:48:56.718197+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achilli_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcein diffusion in cell spheroids where carbenoxolone is used solely as a gap junction inhibitor, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Anderson_2009 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic effects of carbenoxolone as an enzyme inhibitor in the rabbit eye and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for carbenoxolone. |
| popPK | Bader_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of carbenoxolone's effect on adipocyte differentiation and does not report pharmacokinetic parameters. |
| popPK | Baumgart_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on 11β-HSD inhibitors where carbenoxolone is used only as a comparator for enzyme inhibition, with no pharmacokinetic data reported. |
| PD | Baumgart_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel thiazolone derivatives and compares them to carbenoxolone, but does not provide a pharmacodynamic model, exposure-response curve, or numeric PD parameters for carbenoxolone itself. |
| popPK | Baumgart_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of 11β-HSD1 inhibitors where carbenoxolone is used only as a comparator for enzyme inhibition (IC50), with no pharmacokinetic parameters reported. |
| PD | Baumgart_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new thiazolone derivatives and compares them to carbenoxolone, but does not provide a pharmacokinetic or exposure-response analysis for carbenoxolone itself. |
| popPK | Bhaskaracharya_2014 | irrelevant | 0 | 0 | The paper is a mechanistic study on P2X7 receptors where carbenoxolone is used only as a pharmacological tool/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Bhaskaracharya_2014 | not_relevant | 0 | 0 | The paper reports that carbenoxolone had no inhibitory effect on P2X7-induced dye uptake or IL-1β secretion, and no concentration-response data or PD parameters are provided for it. |
| popPK | Burnham_2014 | irrelevant | 0 | 0 | The paper is a mechanistic study on cardiac gap junction uncoupling and does not report pharmacokinetic parameters for carbenoxolone. |
| popPK | Choi_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on gap junction inhibition where carbenoxolone is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Cooreman_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on connexin hemichannels where carbenoxolone is used only as a control inhibitor, not as the subject of pharmacokinetic analysis. |
| PD | Cooreman_2022 | not_relevant | 0 | 0 | The paper investigates the effect of various drugs on Cx43 hemichannels, but carbenoxolone is used only as a positive control inhibitor in the assay and is not the subject of a dose-response or exposure-response analysis. |
| popPK | Darko_2021 | irrelevant | 0 | 0 | The paper is a computational study on Ebola virus protein VP35 inhibitors and does not involve carbenoxolone or report any pharmacokinetic parameters for it. |
| PD | Darko_2021 | not_relevant | 0 | 0 | The paper is a computational study on novel anti-Ebola compounds and does not mention carbenoxolone or report any pharmacodynamic or exposure-response data. |
| popPK | Epple_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sodium absorption where carbenoxolone is used as an enzyme inhibitor, not a pharmacokinetic study reporting disposition parameters for carbenoxolone. |
| popPK | Gadeock_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P2X7 receptors in cell lines where carbenoxolone is used only as a negative control antagonist, with no pharmacokinetic parameters reported. |
| PD | Gadeock_2012 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for ATP and other agonists, but explicitly states that carbenoxolone did not impair the response, providing no numeric PD relationship or parameters for carbenoxolone. |
| popPK | Gong_2008 | irrelevant | 0 | 0 | The study is a mechanistic investigation of enzyme co-localization and activity where carbenoxolone is used only as a tool compound/inhibitor, with no pharmacokinetic parameters reported. |
| PD | Gong_2008 | not_relevant | 3 | 2 | The paper reports an IC50 for celecoxib's effect on 11ss-HSD1 activity, not for carbenoxolone; carbenoxolone is used only as a fixed-dose inhibitor in a qualitative observation of COX-2 expression. |
| popPK | Heim_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gastric mucosal cell function, not a pharmacokinetic study, and reports no disposition parameters for carbenoxolone. |
| PD | Heim_1990 | not_relevant | 0 | 0 | The study reports that carbenoxolone failed to enhance tracer incorporation, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Ichikawa_2009 | irrelevant | 0 | 0 | The paper is a mechanistic study on intracellular calcium signaling in rat bone marrow stromal cells where carbenoxolone is used only as a gap junction blocker, not as the subject of pharmacokinetic analysis. |
| PD | Ichikawa_2009 | not_relevant | 0 | 0 | The paper investigates P2Y2 receptor signaling in bone marrow stromal cells; carbenoxolone is mentioned only as a gap junction blocker in a qualitative pharmacological context, with no exposure-response or dose-response analysis for carbenoxolone. |
| popPK | Jia_2023 | irrelevant | 0 | 0 | The paper is a review of traditional Chinese medications for gastric mucosal injury and does not contain any pharmacokinetic data or mention of carbenoxolone. |
| PD | Jia_2023 | not_relevant | 0 | 0 | The paper is a review of traditional Chinese medications for gastric mucosal injury and does not report any specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for carbenoxolone. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on gap junctions in adipose tissue where carbenoxolone is used only as a pharmacological tool to block connexins, not as a subject of pharmacokinetic analysis. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper uses carbenoxolone as a qualitative pharmacological tool to block gap junctions, but does not report a dose-response or exposure-response relationship for carbenoxolone itself. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The paper is a mechanistic study on carbenoxolone's anti-inflammatory effects in sepsis models and does not report any pharmacokinetic parameters. |
| PD | Li_2013 | not_relevant | 0 | 0 | The provided text consists only of materials and a brief description of an animal model (CLP) and does not contain any results, data, or numeric parameters for a pharmacodynamic or exposure-response relationship. |
| popPK | Ling_2021 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on neuroinflammation where carbenoxolone is used only as a Pannexin 1 inhibitor, with no pharmacokinetic parameters reported. |
| PD | Ling_2021 | not_relevant | 3 | 2 | The paper uses carbenoxolone as a qualitative inhibitor in cell assays without reporting a formal dose-response curve, Emax, or EC50 for the drug itself. |
| popPK | Liu_2012 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of carbenoxolone as a gap junction blocker in rats, reporting behavioral endpoints (time to loss of righting reflex) rather than pharmacokinetic parameters. |
| PGx | Mantero_1996 | not_relevant | 0 | 0 | The paper discusses carbenoxolone only as a cause of acquired apparent mineralocorticoid excess, not as a drug whose PK/PD is altered by a specific gene variant. |
| PGx | Marsh_2016 | not_relevant | 0 | 0 | The paper investigates the molecular binding of carbenoxolone to a connexin protein (GJC3) but does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of carbenoxolone. |
| popPK | Mascayano_2024 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic assay investigating the allosteric inhibition of 5-lipoxygenase by carbenoxolone, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | McGuire_2002 | irrelevant | 0 | 0 | The paper is a mechanistic pharmacology study on PAR2-mediated vascular relaxation where carbenoxolone is used only as a gap junction inhibitor, not as the subject drug for PK analysis. |
| PD | McGuire_2002 | not_relevant | 0 | 0 | The paper investigates PAR2-mediated vascular relaxation and mentions carbenoxolone only as a negative control that did not inhibit the response, providing no exposure-response or dose-response data for carbenoxolone itself. |
| popPK | Molnár_2011 | irrelevant | 0 | 0 | The paper is a mechanistic study on astrocytic calcium signaling where carbenoxolone is used only as a gap-junction blocker, not as the subject drug for pharmacokinetic analysis. |
| PD | Molnár_2011 | not_relevant | 0 | 0 | The paper studies astrocytic calcium signaling in the brain; carbenoxolone is used only as a qualitative gap junction blocker, and no pharmacodynamic parameters (e.g., IC50, Emax) for carbenoxolone are reported. |
| popPK | Mosquera_2018 | irrelevant | 0 | 0 | The study focuses on the identification of 11β-HSD1 inhibitors from plant extracts, using carbenoxolone only as a positive control in in-vitro assays, and does not report any pharmacokinetic parameters for carbenoxolone. |
| popPK | Murali_2014 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper where carbenoxolone is used only as a tool compound to block pannexin-1 channels, not as the subject of pharmacokinetic analysis. |
| popPK | Murali_2017 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study where carbenoxolone is used as a tool compound (Panx-1 blocker), not as the subject drug for pharmacokinetic analysis. |
| popPK | Muramatsu_1984 | irrelevant | 0 | 0 | The paper studies the effect of a different compound (SU-88) on prostaglandin metabolism and does not report pharmacokinetic parameters for carbenoxolone. |
| PD | Muramatsu_1984 | not_relevant | 0 | 0 | The paper investigates the effect of SU-88 on prostaglandin metabolism, not carbenoxolone, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Okada_2015 | irrelevant | 0 | 0 | The paper is an electrophysiology study using carbenoxolone as a channel blocker, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Pereira_2019 | irrelevant | 0 | 0 | The study focuses on the gastroprotective effects of a plant extract, using carbenoxolone only as a mechanistic comparator (NP-SH blocker) without reporting any pharmacokinetic parameters for it. |
| PD | Pereira_2019 | not_relevant | 0 | 0 | The paper studies a plant extract (Avicennia schaueriana) and uses carbenoxolone only as a qualitative mechanism probe (reversal of effect), without reporting any exposure-response or dose-response data for carbenoxolone itself. |
| popPK | Petrovich_2014 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of FKBP51 induction by aldosterone and does not report any pharmacokinetic parameters for carbenoxolone. |
| PD | Petrovich_2014 | not_relevant | 0 | 0 | The paper investigates the dose-response of aldosterone on FKBP51 induction, not the pharmacodynamics of carbenoxolone. |
| popPK | Reyes_2009 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation using carbenoxolone as a pharmacological inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ripps_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment on Xenopus oocytes measuring gap-junctional currents, not a pharmacokinetic study, and carbenoxolone is used only as a pharmacological modulator. |
| popPK | Rolan_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of emestedastat, and carbenoxolone is only mentioned as a comparator in the discussion without any PK parameter values provided. |
| popPK | Skeberdis_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on gap junction uncoupling where carbenoxolone is used as a reagent, not a pharmacokinetic study. |
| PD | Skeberdis_2011 | not_relevant | 3 | 2 | The paper reports an IC50 for octanol (a different compound) but only provides qualitative observations regarding carbenoxolone (lack of recovery), without numeric concentration-effect parameters for carbenoxolone itself. |
| popPK | Sliwoski_2014 | irrelevant | 0 | 0 | The paper is a review of computational drug discovery methods and contains no pharmacokinetic data or parameters for carbenoxolone. |
| PD | Sliwoski_2014 | not_relevant | 0 | 0 | The text is a general review of computational methods in drug discovery and does not contain any specific pharmacodynamic or exposure-response data for carbenoxolone. |
| popPK | Stanetty_2012 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and antiviral activity of glycyrrhizin analogues, with carbenoxolone serving only as a reference compound for structural comparison and cytotoxicity testing, not as a subject of pharmacokinetic analysis. |
| PD | Stanetty_2012 | not_relevant | 0 | 0 | The paper reports IC50 values for new glycyrrhizin analogues, not for carbenoxolone, and does not provide a pharmacodynamic model or exposure-response relationship for carbenoxolone. |
| popPK | Studzińska_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of 11β-HSD1 inhibitors where carbenoxolone is used only as a comparator for enzyme inhibition potency, not as a subject for pharmacokinetic analysis. |
| PD | Studzińska_2021 | not_relevant | 2 | 2 | The paper reports in vitro enzyme inhibition data (IC50) for novel compounds and carbenoxolone, but does not provide a pharmacokinetic or exposure-response model, nor does it report a full dose-response curve or numeric PD parameters (like Emax or slope) for carbenoxolone beyond a single IC50 value. |
| popPK | Thakur_2015 | irrelevant | 0 | 0 | The study is a mechanistic investigation of neuroinflammation and mitochondrial function in a rat model, reporting no pharmacokinetic parameters for carbenoxolone. |
| PD | Thakur_2015 | not_relevant | 1 | 0 | The paper reports qualitative biological effects of a single fixed dose (20 mg/kg) in an animal model without any concentration-effect analysis, dose-response curve, or numeric PD parameters. |
| popPK | Vessey_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on retinal calcium channels and does not report pharmacokinetic parameters for carbenoxolone. |
| popPK | Vivar_2012 | irrelevant | 0 | 0 | The paper is a neurophysiological study where carbenoxolone is used only as a gap junction blocker, with no pharmacokinetic parameters reported. |
| popPK | Véga_2003 | irrelevant | 0 | 0 | The study is a mechanistic investigation of glucose uptake in rat nerves where carbenoxolone is used only as a gap junction blocker, not as the subject drug for pharmacokinetic analysis. |
| PGx | Walker_2007 | not_relevant | 0 | 0 | The paper is a review of 11b-HSD1 physiology and carbenoxolone's mechanism of action, but it does not report pharmacogenomic studies linking gene variants to carbenoxolone PK/PD parameters. |
| popPK | Xiao_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of uterine artery contractions where carbenoxolone is used as a tool compound (11β-HSD inhibitor) rather than the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_carbenoxolone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
