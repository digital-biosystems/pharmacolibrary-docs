<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;heparin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Heparin_Salem2022_reference&quot;,&quot;label&quot;:&quot;Salem_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_heparin/Heparin_Salem2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# heparin

- **generic name:** heparin
- **ATC codes:** `B01AB01`, `C05BA03`, `S01XA14`
- **DrugBank:** [DB01109](https://go.drugbank.com/drugs/DB01109) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Heparin is an anticoagulant (blood thinner) used to treat and prevent blood clots, including pulmonary embolism, and is also used in antiphospholipid syndrome. It is a widely used medicine and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q190016](https://www.wikidata.org/wiki/Q190016) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:07 | 9:40 | 0/0/3 | 1/0/1 | 0/0/0 | 197,507/22,956 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 10/8 | 16/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gouin-Thibault_2024_reference](drugs/drug_heparin/Heparin_GouinThibault2024_reference.md) | — | 1-compartment (no model) | 3 | Gouin-Thibault I et al., Tinzaparin, an alternative to subcutane…, Journal of thrombosis and h… (2024) | [10.1016/j.jtha.2024.07.006](https://doi.org/10.1016/j.jtha.2024.07.006) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Lanoiselée_2026_reference](drugs/drug_heparin/Heparin_Lanoisele2026_reference.md) | — | 1-compartment (no model) | 4 | Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026) | [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Salem_2022_reference](drugs/drug_heparin/Heparin_Salem2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Salem AM et al., Reassessing the Pediatric Dosing Recomm…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2007](https://doi.org/10.1002/jcph.2007) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Delavenne_2017_ACT](drugs/drug_heparin/pd_Delavenne_2017_ACT.md) | activated clotting time ← heparin · direct Emax (saturable) effect | — | Delavenne X et al., Pharmacokinetic/pharmacodynamic model f…, British journal of anaesthe… (2017) | [10.1093/bja/aex044](https://doi.org/10.1093/bja/aex044) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Delavenne_2017_anti_Xa](drugs/drug_heparin/pd_Delavenne_2017_anti_Xa.md) | anti-factor Xa activities ← heparin · direct Emax (saturable) effect | — | Delavenne X et al., Pharmacokinetic/pharmacodynamic model f…, British journal of anaesthe… (2017) | [10.1093/bja/aex044](https://doi.org/10.1093/bja/aex044) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Salem_2022_aPTT](drugs/drug_heparin/pd_Salem_2022_aPTT.md) | activated partial thromboplastin time ← unfractionated heparin · direct linear effect | model (no simulator) | Salem AM et al., Reassessing the Pediatric Dosing Recomm…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2007](https://doi.org/10.1002/jcph.2007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=heparin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: F10 (inhibitor), FGF1 (activator), FGF19 (activator), FGF2 (activator), FGF4 (activator), FGFR1 (activator), FGFR2 (activator), FGFR4 (unknown), HGF (allosteric modulator), HPSE (substrate), PF4 (allosteric modulator), SELP (inhibitor), SERPINC1 (potentiator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 462 matched, 70 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abe_2013.pdf` | Abe S et al., Low-molecular-weight heparin pharmacoki…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201858](https://doi.org/10.5414/CP201858) | [23587152](https://pubmed.ncbi.nlm.nih.gov/23587152) | The paper describes a population PK model for dalteparin (a heparin) with quantitative parameters like clearance and volume, but the specific numeric values are not present in the provided abstract text. |
| `Delavenne_2017.pdf` | Delavenne X et al., Pharmacokinetic/pharmacodynamic model f…, British journal of anaesthe… (2017) | popPK | 10 | [10.1093/bja/aex044](https://doi.org/10.1093/bja/aex044) | [28510738](https://pubmed.ncbi.nlm.nih.gov/28510738) | The paper describes a population PK/PD model for heparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Gibert_2024.pdf` | Gibert A et al., Factors Influencing Unfractionated Hepa…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-023-01334-3](https://doi.org/10.1007/s40262-023-01334-3) | [38169065](https://pubmed.ncbi.nlm.nih.gov/38169065) | The paper describes a population PK/PD model for heparin with specific covariates, but the actual numeric parameter values (clearance, volume, etc.) are not present in the provided evidence. |
| `Konecki_2024.pdf` | Konecki C et al., Population pharmacokinetics of unfracti…, Biomedicine & pharmacothera… (2024) | popPK | 10 | [10.1016/j.biopha.2024.117700](https://doi.org/10.1016/j.biopha.2024.117700) | [39571244](https://pubmed.ncbi.nlm.nih.gov/39571244) | The paper describes a population PK model for heparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Lanoiselée_2024.pdf` | Lanoiselée J et al., Heparin Dosing Regimen Optimization in…, Pharmaceutics (2024) | popPK | 10 | [10.3390/pharmaceutics16060770](https://doi.org/10.3390/pharmaceutics16060770) | [38931891](https://pubmed.ncbi.nlm.nih.gov/38931891) | The paper describes a population pharmacokinetic model for heparin in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Salem_2022.pdf` | Salem AM et al., Reassessing the Pediatric Dosing Recomm…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2007](https://doi.org/10.1002/jcph.2007) | [34816442](https://pubmed.ncbi.nlm.nih.gov/34816442) | The study reports a 1-compartment PK model for unfractionated heparin with specific numeric values for clearance (3.28 L/(h·50 kg)) and volume of distribution (8.83 L/50 kg). |
| `Bosch_2016.pdf` | Bosch R et al., A PK-PD model-based assessment of sugam…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejps.2015.12.028](https://doi.org/10.1016/j.ejps.2015.12.028) | [26747019](https://www.ncbi.nlm.nih.gov/pubmed/26747019) | metadata signals extractable PD data (PK-PD) |
| `Jung_2024.pdf` | Jung D et al., Pharmacokinetics of Human Plasma-Derive…, Journal of clinical pharmac… (2024) | pd | 5 | [10.1002/jcph.2493](https://doi.org/10.1002/jcph.2493) | [38953605](https://www.ncbi.nlm.nih.gov/pubmed/38953605) | metadata signals extractable PD data (turnovermodel) |
| `Robson_2000.pdf` | Robson R, The use of bivalirudin in patients with…, The Journal of invasive car… (2000) | pd | 5 | not captured | [11156732](https://www.ncbi.nlm.nih.gov/pubmed/11156732) | metadata signals extractable PD data (Emax) |
| `Schmitt_2015.pdf` | Schmitt C et al., Absence of pharmacodynamic interaction…, Journal of cardiovascular p… (2015) | pd | 5 | [10.1097/FJC.0000000000000211](https://doi.org/10.1097/FJC.0000000000000211) | [25602360](https://www.ncbi.nlm.nih.gov/pubmed/25602360) | metadata signals extractable PD data (Emax) |
| `Nahar_2014.pdf` | Nahar R et al., CYP2C9, VKORC1, CYP4F2, ABCB1 and F5 va…, Pharmacological reports : PR (2014) | pgx | 5 | [10.1016/j.pharep.2013.09.006](https://doi.org/10.1016/j.pharep.2013.09.006) | [24911077](https://www.ncbi.nlm.nih.gov/pubmed/24911077) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-05T15:59:12.819204+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2013 | relevant | 10 | 2 | The paper describes a population PK model for dalteparin (a heparin) with quantitative parameters like clearance and volume, but the specific numeric values are not present in the provided abstract text. |
| PGx | Aldiban_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on warfarin, not heparin. |
| PGx | Baldo_2023 | not_relevant | 0 | 0 | The paper is a review of adverse drug reactions in anesthesia and does not report pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| popPK | Bosch_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of sugammadex on coagulation parameters, with heparin serving only as a co-administered background therapy rather than the subject of PK analysis. |
| PGx | Carew_1992 | not_relevant | 0 | 0 | The paper investigates the effect of glycosylation on von Willebrand factor binding to platelets, not the pharmacokinetics or pharmacodynamics of heparin. |
| PGx | Chen_2014 | not_relevant | 0 | 0 | The paper investigates heparin's modulation of drug transporters in cancer cells, not the effect of genetic variants on heparin's pharmacokinetics or pharmacodynamics. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper investigates the surface immobilization of BMP-2 for bone regeneration and does not report pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Conde_2007 | not_relevant | 0 | 0 | The paper discusses CENP-A nucleosome stability and uses heparin as a reagent for destabilization, not as a therapeutic drug subject to pharmacogenomic analysis. |
| PGx | Connelly_1998 | not_relevant | 0 | 0 | The paper discusses hepatic lipase deficiency and its effect on lipoprotein metabolism, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| PGx | Czyrek_2026 | not_relevant | 0 | 0 | The paper studies engineered FGF1 variants for diabetes, not the pharmacogenomics of heparin. |
| popPK | Delavenne_2017 | relevant | 10 | 0 | The paper describes a population PK/PD model for heparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Eljilany_2021 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on warfarin (INR and dose), not heparin. |
| PGx | Galvan_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of PCSK9 uptake and LDL regulation, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| PGx | Gao_1995 | not_relevant | 0 | 0 | The paper describes a protein engineering study of SOD, not a pharmacogenomic study of heparin pharmacokinetics or pharmacodynamics. |
| popPK | Gibert_2024 | relevant | 10 | 0 | The paper describes a population PK/PD model for heparin with specific covariates, but the actual numeric parameter values (clearance, volume, etc.) are not present in the provided evidence. |
| popPK | Gouin-Thibault_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tinzaparin (a low molecular weight heparin), not for heparin (unfractionated heparin) as the subject drug. |
| PGx | Hernandez-Suarez_2016 | not_relevant | 0 | 0 | The paper focuses on warfarin pharmacogenomics (NQO1*2) and does not report any pharmacogenomic effects on heparin PK or PD parameters. |
| PGx | Huang_2021 | not_relevant | 0 | 0 | The paper investigates the structure and immunogenicity of the human metapneumovirus F protein and its binding to heparin as a receptor, not the pharmacokinetics or pharmacodynamics of heparin as a drug in relation to genetic variants. |
| PGx | Ikeda_2021 | not_relevant | 0 | 0 | The paper is a general review of cancer-associated VTE and anticoagulation treatments, discussing drug-drug interactions for DOACs but containing no data on pharmacogenomic effects on heparin PK/PD. |
| PGx | Ivanova_2025 | not_relevant | 0 | 0 | The paper is a case report describing the co-occurrence of genetic polymorphisms in a patient with thrombosis, but it does not report any pharmacokinetic or pharmacodynamic changes in heparin resulting from these variants. |
| PGx | Jiang_2011 | not_relevant | 0 | 0 | The paper investigates the association of heparin metabolism genes with fatty acid composition in cattle, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| popPK | Jung_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for antithrombin (AT), not heparin, although heparin is mentioned as a co-administered anticoagulant. |
| PD | Jung_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for antithrombin (AT) but does not provide a pharmacodynamic model or numeric exposure-response/dose-response parameters for heparin. |
| PGx | Karlsson_1993 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of EC-SOD C and its binding to heparin, but does not report how a gene variant affects the PK/PD of heparin itself. |
| PGx | Karlsson_1994 | not_relevant | 0 | 0 | The paper studies the tissue retention of the protein EC-SOD via heparin binding, not the pharmacokinetics or pharmacodynamics of heparin as a drug in relation to human genetic variants. |
| PGx | Karnes_2018 | not_relevant | 2 | 0 | The paper discusses genetic risk factors for the adverse event Heparin-Induced Thrombocytopenia (HIT), not the pharmacokinetic or pharmacodynamic parameters of heparin itself. |
| PGx | Kayashima_2022 | not_relevant | 0 | 0 | The paper investigates the role of the Stabilin-2 gene in atherosclerosis and mentions heparin only as a ligand that is not the cause of the observed protection, without reporting any pharmacogenomic effects on heparin's PK or PD parameters. |
| popPK | Konecki_2024 | relevant | 10 | 0 | The paper describes a population PK model for heparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Kurtz_2002 | not_relevant | 0 | 0 | The paper discusses antiangiogenesis therapy and heparin-binding growth factors in neurofibromatosis, but does not report pharmacogenomic effects on the PK or PD of heparin. |
| popPK | Lanoiselée_2024 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for heparin in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| PGx | Lerch_2007 | not_relevant | 0 | 0 | The paper investigates the structural and biophysical binding of heparin to follistatin isoforms, not the effect of genetic variants on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Lund_2021 | not_relevant | 0 | 0 | The paper describes the expression and purification of lipoprotein lipase (LPL) using heparin affinity chromatography, but does not report pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Mann_1995 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of a genetic mutation in apolipoprotein E (apoE) and its binding to heparin, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of heparin as a therapeutic drug. |
| PGx | McCarley_2023 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic considerations for anticoagulants in HHT patients but does not report specific gene-variant effects on heparin PK or PD parameters. |
| PGx | Miklosz_2018 | not_relevant | 2 | 1 | The paper is a general review of anticoagulant pharmacogenetics and mentions heparin resistance only qualitatively without reporting specific quantitative PK/PD parameter changes linked to gene variants. |
| PGx | Milner_2022 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (apixaban with P-gp/CYP3A4 inhibitors) and does not report any pharmacogenomic effects (gene variants) on heparin PK/PD. |
| PGx | Minnich_1995 | not_relevant | 0 | 0 | The paper describes a genetic variant affecting lipid metabolism and apoE-heparin binding affinity, but does not report pharmacokinetic or pharmacodynamic parameters of heparin as a therapeutic drug. |
| PGx | Nahar_2014 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on warfarin (INR), not heparin. |
| popPK | Nguyen_2019 | irrelevant | 0 | 0 | The study investigates the molecular mechanisms of heparin's interaction with interleukin-12 (bioactivity and binding) rather than reporting pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Park_2018 | not_relevant | 0 | 0 | The paper investigates the genetic stability of stem cells treated with heparin-coated nanoparticles for gene delivery, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| PGx | Petito_2025 | not_relevant | 0 | 0 | The paper is a review on the pathophysiology of Vaccine-Induced Immune Thrombotic Thrombocytopenia (VITT) and does not report pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Poehlman_1986 | not_relevant | 0 | 0 | The study investigates the genetic influence on adipose tissue metabolism and lipoprotein lipase activity in response to overfeeding, not the pharmacokinetics or pharmacodynamics of heparin as a therapeutic drug. |
| PGx | Poehlman_1987 | not_relevant | 0 | 0 | The paper investigates the genetic influence on body composition and adipose tissue metabolism after exercise, where heparin is used only as a reagent to measure lipoprotein lipase activity, not as a drug subject to pharmacogenomic analysis. |
| PGx | Porebska_2021 | not_relevant | 0 | 0 | The paper investigates the biological activity of FGF1 oligomers and their interaction with FGFRs, not the pharmacokinetics or pharmacodynamics of heparin in relation to genetic variants. |
| popPK | Raner_2024 | irrelevant | 1 | 0 | This is a systematic review and meta-analysis of clinical outcomes (blood loss, platelet counts) comparing dosing strategies, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for heparin. |
| popPK | Rider_1997 | irrelevant | 0 | 0 | The paper discusses the antiviral mechanism of heparin in vitro and does not report any pharmacokinetic parameters. |
| PD | Rider_1997 | not_relevant | 3 | 4 | The text is a review/summary that mentions a single EC50 value (5 microg/ml) for in vitro HIV-1 inhibition but does not report a full dose-response curve, PK/PD model, or detailed pharmacodynamic analysis. |
| popPK | Robson_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bivalirudin, with heparin serving only as a comparator for bleeding outcomes and ACT values, not as the subject of PK modeling. |
| PGx | Rogenhofer_2017 | not_relevant | 0 | 0 | The study reports a clinical outcome (miscarriage rate) rather than a pharmacokinetic or pharmacodynamic parameter of heparin. |
| PGx | Rüfer_2003 | not_relevant | 0 | 0 | The text is a general review of anticoagulation therapy for venous thromboembolism and does not discuss any gene variants, genotypes, or pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Saavedra_2006 | not_relevant | 0 | 0 | The paper discusses regulatory approval and interchangeability of biogeneric heparin, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Schmitt_2015 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic interaction of inclacumab with heparin, where heparin serves as a probe drug rather than the subject of a pharmacokinetic parameter estimation. |
| PGx | Stöllberger_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (carbamazepine affecting rivaroxaban) and does not investigate gene variants or pharmacogenomic effects on heparin. |
| PGx | Sylvers-Davie_2021 | not_relevant | 0 | 0 | The paper investigates the interaction between angiopoietin-like proteins and lipases, not the pharmacokinetics or pharmacodynamics of heparin. |
| popPK | Tan_2025 | irrelevant | 0 | 0 | The study is a clinical trial comparing treatment strategies for hypertriglyceridemia-induced acute pancreatitis and does not report pharmacokinetic parameters for heparin. |
| PGx | Tang_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of paclitaxel resistance reversal by CRM197 in ovarian cancer cells, not the pharmacogenomics of heparin. |
| PGx | Underwood_2025 | not_relevant | 0 | 0 | The paper investigates stabilin-2 ligands and thrombosis risk, not the pharmacokinetics or pharmacodynamics of heparin therapy. |
| popPK | Upchurch_2001 | irrelevant | 0 | 0 | The study investigates the chemical interaction between heparin and nitric oxide (mechanistic/chemical), not the pharmacokinetic disposition parameters (CL, V, etc.) of heparin. |
| PGx | Vandell_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of warfarin and edoxaban, not heparin. |
| PGx | Vos_2019 | not_relevant | 0 | 0 | The paper investigates genetic variations in the RSV virus G-protein and their impact on disease severity, not human pharmacogenomics or heparin pharmacokinetics/pharmacodynamics. |
| PGx | Wei_2024 | not_relevant | 0 | 0 | The paper is a protocol for a clinical trial comparing rivaroxaban and enoxaparin, and it does not report results on pharmacogenomic effects on heparin PK/PD parameters. |
| PGx | Westmark_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of Factor IX variants, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of heparin. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper reports a genetic variant affecting LPL enzyme activity and lipid metabolism, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| PGx | Xi_2023 | not_relevant | 0 | 0 | The paper focuses on protein engineering of heparan sulfate N-sulfotransferase for industrial heparin synthesis, not on human pharmacogenomics or clinical PK/PD parameters. |
| PGx | Xu_1992 | not_relevant | 0 | 0 | The paper studies fibroblast growth factor receptor isoforms and their expression, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 15:59 UTC</sub>
