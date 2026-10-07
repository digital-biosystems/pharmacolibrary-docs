<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;fasudil&quot;}]"></div>

# fasudil

- **generic name:** fasudil
- **ATC codes:** `C04AX32`
- **DrugBank:** [DB08162](https://go.drugbank.com/drugs/DB08162) · **PubChem:** [CID 3547](https://pubchem.ncbi.nlm.nih.gov/compound/3547)
- **molar mass:** 291.369 g/mol (C14H17N3O2S) — DrugBank
- **groups:** investigational

## About

Fasudil is a vasodilator and protein kinase inhibitor that has been investigated for treating cardiovascular conditions involving poor blood flow. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5437132](https://www.wikidata.org/wiki/Q5437132) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:04 | 1:00 | 0/0/0 | 2/0/1 | 0/0/0 | 148,464/3,519 | einfracz / qwen3.8-27b | 10 | 1/13 | 9/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2011_rabbit_aortic_rings_contracted_by_KCl](drugs/drug_fasudil/pd_Li_2011_rabbit_aortic_rings_contracted_by_KCl.md) | rabbit aortic rings contracted by KCl ← fasudil · direct sigmoid Emax (Hill) effect | — | Li Q et al., Vasodilatation produced by fasudil mesy…, Vascular pharmacology (2011) | [10.1016/j.vph.2011.06.005](https://doi.org/10.1016/j.vph.2011.06.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2011_rabbit_aortic_rings_contracted_by_Methoxamine_Met](drugs/drug_fasudil/pd_Li_2011_rabbit_aortic_rings_contracted_by_Methoxamine_Met.md) | rabbit aortic rings contracted by Methoxamine (Met) ← fasudil · direct sigmoid Emax (Hill) effect | — | Li Q et al., Vasodilatation produced by fasudil mesy…, Vascular pharmacology (2011) | [10.1016/j.vph.2011.06.005](https://doi.org/10.1016/j.vph.2011.06.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2011_rat_aortic_rings_contracted_by_KCl](drugs/drug_fasudil/pd_Li_2011_rat_aortic_rings_contracted_by_KCl.md) | rat aortic rings contracted by KCl ← fasudil · direct sigmoid Emax (Hill) effect | — | Li Q et al., Vasodilatation produced by fasudil mesy…, Vascular pharmacology (2011) | [10.1016/j.vph.2011.06.005](https://doi.org/10.1016/j.vph.2011.06.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Scherer_2005_reversal_of_ET_1_mediated_vasoconstriction_vascular_diameter](drugs/drug_fasudil/pd_Scherer_2005_reversal_of_ET_1_mediated_vasoconstriction_vasc.md) | reversal of ET-1-mediated vasoconstriction (vascular diameter) ← fasudil · direct Emax (saturable) effect | — | Scherer EQ et al., Pharmacological reversal of endothelin-…, BMC ear, nose, and throat d… (2005) | [10.1186/1472-6815-5-10](https://doi.org/10.1186/1472-6815-5-10) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Snelder_2013_TPR](drugs/drug_fasudil/pd_Snelder_2013_TPR.md) | total peripheral resistance ← fasudil · indirect response — drug inhibits the production of total peripheral resistance | — | Snelder N et al., PKPD modelling of the interrelationship…, British journal of pharmaco… (2013) | [10.1111/bph.12190](https://doi.org/10.1111/bph.12190) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fasudil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PKIA (unknown), PRKACA (unknown), ROCK1 (inhibitor), ROCK2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 83 matched, 65 returned
- **screened:** 3  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Snelder_2014.pdf` | Snelder N et al., Drug effects on the CVS in conscious ra…, British journal of pharmaco… (2014) | pd | 5 | [10.1111/bph.12824](https://doi.org/10.1111/bph.12824) | [24962208](https://www.ncbi.nlm.nih.gov/pubmed/24962208) | metadata signals extractable PD data (PKPD) |
| `Shao_2018.pdf` | Shao JZ et al., In vitro inhibition of proliferation, m…, International journal of op… (2018) | pd | 4 | [10.18240/ijo.2018.08.02](https://doi.org/10.18240/ijo.2018.08.02) | [30140626](https://www.ncbi.nlm.nih.gov/pubmed/30140626) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T16:04:14.323094+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alsakti_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clazosentan efficacy in subarachnoid hemorrhage, where fasudil is used only as a clinical comparator, and no pharmacokinetic parameters for fasudil are reported. |
| PD | Alsakti_2026 | not_relevant | 0 | 0 | The paper is a meta-analysis of clazosentan (not fasudil) and does not report any pharmacodynamic or exposure-response parameters for fasudil. |
| popPK | Antic_2024 | irrelevant | 0 | 0 | The study is a pharmacodynamic cardiovascular assessment in dogs and does not report pharmacokinetic parameters (CL, V, etc.) for fasudil. |
| PD | Antic_2024 | not_relevant | 2 | 1 | The paper describes a qualitative profiling of cardiovascular effects for fasudil in an anesthetized dog model but does not report specific numeric PD parameters (e.g., EC50, Emax) or quantitative exposure-response curves in the provided text. |
| popPK | Behuliak_2013 | irrelevant | 0 | 0 | The study is a mechanistic pharmacodynamic investigation of blood pressure and vascular contraction, reporting no pharmacokinetic parameters for fasudil. |
| popPK | Büyükafşar_2003 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of fasudil on muscle contraction and neurotransmitter release in mouse tissue, containing no pharmacokinetic or disposition data. |
| popPK | Büyükafşar_2003_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of relaxant responses in tissue, reporting EC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Choi_2024 | not_relevant | 0 | 0 | The paper studies the mechanism of fasudil in cell differentiation, not its pharmacokinetics/pharmacodynamics in the context of human genetic variation. |
| popPK | Djamai_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on AML cell lines where fasudil is used only as a comparator agent, and no pharmacokinetic parameters for fasudil are reported. |
| PD | Djamai_2021 | not_relevant | 1 | 0 | The paper mentions fasudil only in the context of combination synergy studies with CEL_Amide, reporting no specific concentration-effect data, IC50, or PD parameters for fasudil itself. |
| popPK | Ergul_2016 | irrelevant | 0 | 0 | This is an in-vitro mechanistic/pharmacodynamic study measuring contractile effects, not a pharmacokinetic study reporting disposition parameters for fasudil. |
| PGx | Fabbri_2021 | not_relevant | 0 | 0 | The paper identifies fasudil as a potential drug repositioning candidate based on gene-drug target enrichment, but does not report any pharmacogenomic effect on fasudil's PK or PD parameters. |
| popPK | Gao_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fasudil's effects on cancer cell proliferation and migration, reporting no pharmacokinetic parameters. |
| popPK | Hanazaki_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological experiment on rat airway smooth muscle contraction and does not report pharmacokinetic parameters (e.g., clearance, volume, half-life) for fasudil. |
| popPK | He_2016 | irrelevant | 0 | 0 | The study is a mechanistic neuroprotection investigation in a Parkinson's disease model and does not report any pharmacokinetic parameters for fasudil. |
| PD | He_2016 | not_relevant | 1 | 0 | The paper reports qualitative neuroprotective effects and mechanism of action in an animal model but does not provide numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Heikkila_2011 | irrelevant | 0 | 0 | The paper is a structural biology and in-vitro mechanistic study of MRCKβ kinase inhibition, not a pharmacokinetic study, and contains no disposition parameters for fasudil. |
| popPK | Li_2011 | irrelevant | 0 | 0 | The study investigates the vasodilatory/pharmacodynamic effects of fasudil, not its pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Löhn_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of SAR407899, with fasudil serving only as a comparator agent, and no pharmacokinetic parameters for fasudil are reported. |
| PD | Löhn_2009 | not_relevant | 3 | 2 | The paper characterizes SAR407899 and compares it to fasudil, but does not report specific numeric PD parameters (e.g., EC50, Emax) or an exposure-response curve for fasudil itself. |
| popPK | Ma_2015 | irrelevant | 0 | 0 | The paper focuses on the development of new RhoA inhibitors (compounds 26b/26d) and uses fasudil only as a comparator for in vivo efficacy, without reporting any pharmacokinetic parameters for fasudil. |
| PD | Ma_2015 | not_relevant | 2 | 1 | The paper reports IC50 values for new compounds and qualitative in vivo efficacy comparisons to fasudil, but does not provide numeric PD parameters or exposure-response data for fasudil itself. |
| PGx | Majcher_2026 | not_relevant | 0 | 0 | The paper uses fasudil as a therapeutic intervention to demonstrate efficacy in a disease model (SPLIS), but does not report how specific gene variants affect the pharmacokinetics or pharmacodynamics of the drug itself. |
| popPK | Mishra_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel ROCK inhibitors where fasudil is used only as a comparator for protein stability, with no pharmacokinetic parameters reported. |
| PD | Mishra_2014 | not_relevant | 1 | 2 | The paper reports IC50/GI50 values for novel compounds and compares binding stability to fasudil, but does not provide a concentration-effect curve or numeric PD parameters for fasudil itself. |
| popPK | Moskal_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on Parkin-mediated mitophagy where fasudil is used only as a ROCK inhibitor tool compound, with no pharmacokinetic parameters reported. |
| popPK | Muñoz_2025 | irrelevant | 0 | 0 | The paper is a review discussing the mechanistic role of fasudil in neuroinflammation and dyskinesia, containing no pharmacokinetic data or quantitative disposition parameters. |
| PD | Muñoz_2025 | not_relevant | 1 | 0 | The text is a review or introduction discussing the potential therapeutic role of fasudil in L-DOPA-induced dyskinesia but does not report any specific experimental data, concentration-effect curves, or numeric PD parameters. |
| popPK | Nakamura_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of hydroxyfasudil's effect on rabbit basilar artery relaxation and does not report pharmacokinetic parameters. |
| popPK | Nishiyama_2026 | irrelevant | 0 | 0 | The study analyzes cerebral hemodynamic changes (CBF, CBV) using CT perfusion in patients, not the systemic pharmacokinetic disposition parameters (CL, V, t1/2) of the drug fasudil. |
| popPK | Oliveira_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel ROCK inhibitors using fasudil only as a structural template/comparator, with no pharmacokinetic data reported. |
| PD | Oliveira_2018 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for novel analogs and mentions fasudil only as a structural template, without providing any pharmacokinetic data, exposure-response analysis, or numeric PD parameters for fasudil itself. |
| popPK | Panta_2019 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of vascular signaling where fasudil is used only as a pharmacological inhibitor of ROCK, not as a subject for pharmacokinetic analysis. |
| PD | Panta_2019 | not_relevant | 0 | 0 | The paper uses fasudil only as a qualitative pharmacological inhibitor to block the ROCK pathway; it does not report a concentration-effect or dose-response relationship for fasudil itself, nor does it provide numeric PD parameters for fasudil. |
| popPK | Pena_2026 | irrelevant | 0 | 0 | The paper is a Phase 2a clinical trial focusing on safety and pharmacodynamic endpoints (NfL, pAKT/tAKT) rather than pharmacokinetic disposition parameters. |
| PD | Pena_2026 | not_relevant | 3 | 2 | The study reports dose-dependent changes in biomarkers (NfL, pAKT/tAKT) but lacks concentration-effect modeling or specific numeric PD parameters (e.g., EC50, Emax) required for an extractable PD relationship. |
| PGx | Pu_2026 | not_relevant | 0 | 0 | The paper discusses BDKRB1 expression and mentions fasudil only as a candidate compound for reversing transcriptional signatures, without reporting any pharmacogenomic effect on PK/PD parameters. |
| popPK | Saito_2011 | irrelevant | 0 | 0 | The study is an in vitro mechanistic/functional pharmacology experiment investigating contractile responses, not a pharmacokinetic study. |
| popPK | Sato_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fasudil's effect on HIV-1 replication and does not report pharmacokinetic parameters. |
| popPK | Satoh_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fasudil's effect on neurite retraction and does not report any pharmacokinetic parameters. |
| popPK | Scherer_2005 | irrelevant | 0 | 0 | This is a mechanistic pharmacological study reporting IC50 values for vasodilation, not a pharmacokinetic study with disposition parameters. |
| popPK | Schröter_2008 | irrelevant | 0 | 0 | The paper describes an in-vitro cell-based assay for Rho-kinase inhibition (IC50) and does not report pharmacokinetic parameters for fasudil. |
| popPK | Schröter_2008_2 | irrelevant | 0 | 0 | The paper is an in-vitro high-throughput screening assay comparison for ROCK-II inhibitors and does not report any pharmacokinetic parameters for fasudil. |
| PD | Schröter_2008_2 | not_relevant | 3 | 5 | The paper reports in vitro IC50 values for fasudil in biochemical assays, which are pharmacodynamic parameters, but it is a methodological comparison of screening formats rather than a pharmacokinetic/pharmacodynamic study of the drug in a biological system. |
| popPK | Shao_2018 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Shimokawa_2002 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for stable angina and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for fasudil. |
| popPK | Snelder_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic (PD) investigation in rats where fasudil PK parameters were adopted from literature to model drug effects on blood pressure, rather than reporting new quantitative PK data for fasudil itself. |
| popPK | Snelder_2014 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PD | Snelder_2014 | not_relevant | 0 | 0 | The provided text is a title and does not contain the full paper content, nor does it mention fasudil or provide any numeric PD parameters. |
| popPK | Song_2006 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of renal vascular reactivity in rats where fasudil is used as a Rho kinase inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| PD | Song_2006 | not_relevant | 4 | 2 | The study reports qualitative rightward shifts in dose-response curves for fasudil but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect data in the text. |
| popPK | Tatsumiya_2009 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of fasudil's effect on muscle contraction, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tran_2021 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study focusing on KD025 and CK2, with fasudil serving only as a negative control/comparator without any pharmacokinetic data. |
| PD | Tran_2021 | not_relevant | 0 | 0 | The paper focuses on KD025 and CK2; fasudil is only mentioned as a negative control with no quantitative PD parameters or exposure-response analysis provided. |
| popPK | Wolff_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for a Phase IIa study in Parkinson's disease that plans to collect pharmacokinetic data but does not report any quantitative PK parameters or results. |
| PD | Wolff_2024 | not_relevant | 0 | 0 | The paper is a study protocol for a Phase IIa clinical trial and does not report any results, data, or pharmacodynamic parameters. |
| popPK | Xu_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity using fasudil as a tool agent, not a pharmacokinetic study. |
| PD | Xu_2005 | not_relevant | 3 | 2 | The study reports qualitative shifts in dose-response curves for fasudil but does not provide numeric PD parameters (e.g., EC50, Emax) or a formal PK/PD model fit. |
| popPK | Xun_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of vascular reactivity and calcium sensitivity, not a pharmacokinetic study, and fasudil is used as a co-administered agent to test vascular effects rather than being the subject of PK analysis. |
| PD | Xun_2005 | not_relevant | 3 | 2 | The paper reports qualitative changes in dose-response curves (shifts, Emax changes) for norepinephrine and calcium, and notes that fasudil abolished the enhancing effect of Ang II, but it does not provide specific numeric PD parameters (EC50, Emax values) for fasudil itself, nor does it present a concentration-effect relationship for fasudil. |
| popPK | Yang_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fasudil's effects on cell migration and gene expression, reporting no pharmacokinetic parameters. |
| popPK | Yao_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel ROCK inhibitors where fasudil is used only as a comparator for vasorelaxation activity, with no pharmacokinetic parameters reported. |
| PD | Yao_2017 | not_relevant | 2 | 1 | The paper reports in vitro IC50 values for new compounds and qualitative ex-vivo vasorelaxation comparisons to fasudil, but does not provide numeric exposure-response or dose-response parameters (e.g., EC50, Emax) for fasudil itself. |
| popPK | Yoon_2019 | irrelevant | 0 | 0 | This paper focuses on computational prioritization of functional drug actions using biological networks and does not report pharmacokinetic parameters for fasudil. |
| PD | Yoon_2019 | not_relevant | 0 | 0 | The paper describes a computational method for prioritizing functional drug actions using biological networks and SVMs, containing no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for fasudil. |
| popPK | Zaccara_2020 | irrelevant | 0 | 0 | The paper is a review of drug interactions and anticonvulsant properties, not a pharmacokinetic study, and contains no quantitative PK parameters for fasudil. |
| PD | Zaccara_2020 | not_relevant | 1 | 0 | The paper is a qualitative review of cardiovascular drugs' effects on seizures and mentions fasudil only as having anticonvulsant properties, without providing any numeric PD parameters or exposure-response data. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of fasudil in reversing drug resistance in glioma cells but does not report pharmacogenomic associations between gene variants and PK/PD parameters. |
| popPK | Zhao_2019 | irrelevant | 2 | 0 | The study focuses on anti-tumor efficacy and tissue distribution (concentrations) rather than reporting quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | İlhan_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of vasodilation in an isolated rat hind limb, not a pharmacokinetic study, and reports no disposition parameters for fasudil. |
| PD | İlhan_2021 | not_relevant | 0 | 0 | The paper investigates the Rho/Rho-Kinase pathway in an isolated rat hind limb model and does not mention fasudil or report any drug-specific exposure-response or dose-response data. |
| popPK | Şahin_2025 | irrelevant | 0 | 0 | The paper is a review on flavonoids and phenolic compounds in neurodegenerative diseases and does not mention fasudil or provide any pharmacokinetic data for it. |
| PD | Şahin_2025 | not_relevant | 0 | 0 | The paper is a review of flavonoids and phenolic compounds in neurodegenerative diseases and does not mention fasudil or report any pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
