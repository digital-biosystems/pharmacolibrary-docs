<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glimepiride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glimepiride_Yoo2020v2_reference&quot;,&quot;label&quot;:&quot;Yoo_2020_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# glimepiride

- **generic name:** glimepiride
- **ATC codes:** `A10BB12`, `A10BD04`, `A10BD06`
- **DrugBank:** [DB00222](https://go.drugbank.com/drugs/DB00222)
- **groups:** approved, investigational

## About

**Description.** First introduced in 1995, glimepiride is a member of the second-generation sulfonylurea (SU) drug class used for the management of type 2 diabetes mellitus (T2DM) to improve glycemic control. Type 2 diabetes is a metabolic disorder with increasing prevalences worldwide; it is characterized by insulin resistance in accordance with progressive β cell failure and long-term microvascular and macrovascular complications that lead to co-morbidities and mortalities. Sulfonylureas are one of the insulin secretagogues widely used for the management of type 2 diabetes to lower blood glucose levels. The main effect of SUs is thought to be effective when residual pancreatic β-cells are present,[A177715] as they work by stimulating the release of insulin from the pancreatic beta cells and they are also thought to exert extra-pancreatic effects, such as increasing the insulin-mediated peripheral glucose uptake.[A177709] 

Glimepiride works by stimulating the secretion of insulin granules from pancreatic islet beta cells by blocking ATP-sensitive potassium channels (K<SUB>ATP</SUB> channels) and causing depolarization of the beta cells. Compared to [glipizide], another second SU drug, glimepiride has a longer duration of action. It is sometimes classified as a third-generation SU because it has larger substitutions than other second-generation SUs.[A177703] Compared to other SUs, glimepiride was associated with a lower risk of developing hypoglycemia and weight gain in clinical trials [A177709] as well as fewer cardiovascular effects than other SUs due to minimal effects on ischemic preconditioning of cardiac myocytes.[A177703] It is effective in reducing fasting plasma glucose, postprandial glucose, and glycosylated hemoglobin levels and is considered to be a useful, cost-effective treatment option for managing type 2 diabetes mellitus.[A177703] Glimepiride was approved by the Food and Drug Administration (FDA) in the United States in 1995 for the treatment of T2DM. It is commo

**Indication.** Glimepiride is indicated for the management of type 2 diabetes in adults as an adjunct to diet and exercise to improve glycemic control as monotherapy. 

It may also be indicated for use in combination with metformin or insulin to lower blood glucose in patients with type 2 diabetes whose high blood sugar levels cannot be controlled by diet and exercise in conjunction with an oral hypoglycemic (a drug used to lower blood sugar levels) agent alone.[L10322]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 21:51 | 9:25 | 1/0/0 | 2/0/0 | 0/0/0 | 159,540/27,563 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 1/3 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Yoo_2020_2_reference](drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md) | Yoo H et al., Pharmacokinetic/Pharmacodynamic Interac…, Drug design, development an… (2020) | [10.2147/DDDT.S275343](https://doi.org/10.2147/DDDT.S275343) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2001](drugs/drug_glimepiride/pd_Hu_2001_unknown.md) | Hu S et al., Glucose-dependent and glucose-sensitizi…, International journal of ex… (2001) | [10.1155/edr.2001.63](https://doi.org/10.1155/edr.2001.63) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mele_2014](drugs/drug_glimepiride/pd_Mele_2014_KATP_channel_current.md) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mele_2014](drugs/drug_glimepiride/pd_Mele_2014_fibers_viability.md) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mele_2014](drugs/drug_glimepiride/pd_Mele_2014_mitochondrial_succinic_dehydrogenases_SDH_activity.md) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mele_2014](drugs/drug_glimepiride/pd_Mele_2014_percent_changes_of_the_protein_content_muscle_weig.md) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glimepiride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…proximately 40% of the total radioactivity was recovered in feces where M1 and M2 accounte…”</sub> | prose |
| excretion | kidney | <sub>“…imately 60% of the total radioactivity was recovered in the urine in 7 days, with M1 and M…”</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inducer), ABCC9 (blocker), KCNJ1 (inhibitor), KCNJ11 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoo_2011.pdf` | Yoo HD et al., Population pharmacokinetic analysis of…, European journal of clinica… (2011) | popPK | 10 | [10.1007/s00228-011-1035-2](https://doi.org/10.1007/s00228-011-1035-2) | [21476064](https://pubmed.ncbi.nlm.nih.gov/21476064) | All population pharmacokinetic parameters for glimepiride are explicitly reported with numeric values in the main text and Table 2, requiring no external supplements. |
| `Antonesi_2011.pdf` | Antonesi IM et al., Pharmacokinetic modeling of glimepiride…, Revista medico-chirurgicala… (2011) | popPK | 9 | not captured | [22046814](https://pubmed.ncbi.nlm.nih.gov/22046814) | The paper describes a PK study of glimepiride with a compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Yun_2006.pdf` | Yun HY et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (2006) | popPK | 9 | [10.1111/j.1365-2710.2006.00766.x](https://doi.org/10.1111/j.1365-2710.2006.00766.x) | [16958825](https://pubmed.ncbi.nlm.nih.gov/16958825) | The paper presents a compartmental PK model for glimepiride with all quantitative parameter estimates explicitly listed in the main text. |

<sub>queue written 2026-09-15T21:43:08.807396+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antonesi_2011 | relevant | 9 | 0 | The paper describes a PK study of glimepiride with a compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Dawra_2019 | irrelevant | 2 | 9 | Glimepiride is only a co-administered probe drug in an ertugliflozin DDI study, and the paper reports noncompartmental rather than population-PK disposition parameters. |
| popPK | Hu_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insulin secretion, not a pharmacokinetic study, and glimepiride is only a comparator agent. |
| popPK | Kasahara_2016 | irrelevant | 1 | 0 | Glimepiride is a co-administered comparator drug in a study focused on tofogliflozin, and no quantitative PK parameters for glimepiride are reported in the evidence. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions on tofogliflozin's PK/PD and other drugs' PK, but does not report a concentration- or dose-response relationship for glimepiride. |
| popPK | Khanam_2006 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of potassium channels in rats, not a pharmacokinetic study, and glimepiride is used only as a comparator agent. |
| PD | Khanam_2006 | not_relevant | 3 | 2 | The paper reports pharmacodynamic parameters (pA2) for glimepiride in an isolated tissue assay (ileum relaxation), not an in vivo exposure-response or dose-response relationship for its hypoglycemic effect. |
| popPK | Kim_2012 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only relative exposure ratios (AUC/Cmax) for glimepiride, lacking absolute quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Krause_1995 | irrelevant | 0 | 0 | The paper is an electrophysiology study on KATP channels in rat myocytes where glimepiride is used only as a channel blocker, not as a subject for pharmacokinetic analysis. |
| PD | Krause_1995 | not_relevant | 0 | 0 | The paper studies KATP channel pharmacology in rat myocytes and does not report a pharmacodynamic or exposure-response relationship for glimepiride. |
| popPK | Mayer_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glimepiride's effects on adipocyte differentiation and does not report any pharmacokinetic parameters. |
| popPK | Mele_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscle atrophy and KATP channel effects, not a pharmacokinetic study, and reports no disposition parameters for glimepiride. |
| popPK | Müller_1996 | irrelevant | 1 | 0 | The paper focuses on the molecular mechanism of action (glucose transport, caveolae interaction) and in-vitro potency, not on quantitative pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Müller_1998 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on insulin signaling pathways where glimepiride is used only as a probe agent, with no pharmacokinetic parameters reported. |
| PD | Müller_1998 | not_relevant | 1 | 0 | The paper focuses on the signaling mechanisms of PIG-P and insulin, mentioning glimepiride only qualitatively as an agent that triggers tyrosine phosphorylation, without providing any numeric concentration-effect data or PD parameters for glimepiride. |
| popPK | Salem_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of levetiracetam on rat duodenum, using glimepiride only as a tool compound to rule out KATP channel involvement, with no PK parameters reported. |
| PD | Salem_2017 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of levetiracetam, not glimepiride; glimepiride is only used as a tool compound to rule out a mechanism. |
| popPK | Utzschneider_2025 | irrelevant | 0 | 0 | The study focuses on beta-cell function parameters (ISR, sensitivity) derived from OGTT modeling, not pharmacokinetic disposition parameters (CL, V, ka) for glimepiride. |
| PD | Yoo_2020_2 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative PD changes (glucose/insulin levels) but does not provide a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) for glimepiride. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_glimepiride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
