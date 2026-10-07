<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;cyclobenzaprine&quot;}]"></div>

# cyclobenzaprine

- **generic name:** cyclobenzaprine
- **ATC codes:** `M03BX08`
- **DrugBank:** [DB00924](https://go.drugbank.com/drugs/DB00924) · **PubChem:** [CID 2895](https://pubchem.ncbi.nlm.nih.gov/compound/2895)
- **molar mass:** 275.3874 g/mol (C20H21N) — DrugBank
- **groups:** approved, investigational

## About

Cyclobenzaprine is a centrally acting muscle relaxant used to relieve muscle spasm, spasticity, cramps, pain, and related conditions such as tetanus and inflammatory myopathy. It is an approved medication and is widely used, mainly for short-term relief of painful muscle spasms.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5198674](https://www.wikidata.org/wiki/Q5198674) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:49 | 5:42 | 0/0/0 | 1/0/0 | 0/0/0 | 256,233/3,890 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Reuss_2009_torticollis](drugs/drug_cyclobenzaprine/pd_Reuss_2009_torticollis.md) | torticollis ← cyclobenzaprine · stimulation effect | — | Reuss R et al., Torticollis under cyclobenzaprine, Pharmacology (2009) | [10.1159/000227773](https://doi.org/10.1159/000227773) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cyclobenzaprine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `AOX1` inhibitor, `CYP1A2` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2C (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR6 (target), HTR7 (target), SLC6A2 (inhibitor), TLR4 (inhibitor), UGT2B10 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 43 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adar_2017.pdf` | Adar L et al., Bioequivalence of cyclobenzaprine hydro…, International journal of cl… (2017) | popPK | 10 | [10.5414/CP203059](https://doi.org/10.5414/CP203059) | [29092731](https://pubmed.ncbi.nlm.nih.gov/29092731) | Study reports quantitative PK parameters (Cmax, AUC, tlag) for cyclobenzaprine in humans. |

<sub>queue written 2026-10-07T02:48:25.793669+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Raoof_2020 | irrelevant | 0 | 0 | The paper describes the development of an electrochemical sensor for the quantitative detection of cyclobenzaprine in pharmaceutical dosage forms and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Akman_2024 | irrelevant | 0 | 0 | The study is a bioanalytical method validation for cyclobenzaprine and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Anand_2021 | irrelevant | 0 | 0 | The study is a retrospective analysis of multidrug interactions in medication lists and does not report any pharmacokinetic parameters for cyclobenzaprine. |
| popPK | Ashby_1972 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial evaluating the treatment of spasticity and does not report pharmacokinetic parameters. |
| popPK | Borenstein_2003 | irrelevant | 0 | 0 | This is a clinical efficacy study for acute muscle spasm, not a pharmacokinetic study, and it contains no quantitative PK parameters (CL, V, t1/2, etc.). |
| popPK | Bryson_2015 | irrelevant | 2 | 0 | The study focuses on transdermal permeation in Franz diffusion cells (in vitro) and an in vivo pain model, reporting qualitative outcomes rather than systemic population pharmacokinetic parameters for cyclobenzaprine. |
| popPK | Burra_2019 | irrelevant | 2 | 0 | The study reports drug concentrations in human milk and a relative infant dose, but does not provide population pharmacokinetic parameters (CL, V, Q, ka, t1/2) for the drug itself in the mother. |
| PGx | Chaugai_2019 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (CYP1A2 inhibitors) and focuses on tizanidine, not a pharmacogenomic effect (gene variant) on cyclobenzaprine. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The paper discusses cyclobenzaprine only as an interfering drug affecting other medications' metabolic ratios and does not report pharmacogenomic effects on cyclobenzaprine's own PK/PD. |
| popPK | Cunha-Júnior_2017 | irrelevant | 0 | 0 | The study investigates the antileishmanial efficacy and mechanism of action (ROS, enzyme inhibition) of cyclobenzaprine, not its pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Darwish_2010 | irrelevant | 2 | 0 | The paper is a review summarizing qualitative PK profiles and relative exposure comparisons without providing specific numeric disposition parameters (CL, V, t1/2) for cyclobenzaprine. |
| popPK | Darwish_2018 | irrelevant | 0 | 0 | The paper describes analytical methods (UV spectroscopy/multivariate calibration) for assaying cyclobenzaprine and its degradation products, not pharmacokinetic studies. |
| popPK | Gürsoy_2025 | irrelevant | 0 | 0 | The study is an in-vitro/mechanistic vascular reactivity assessment in rats, not a pharmacokinetic study, and reports no quantitative disposition parameters (CL, V, t1/2, etc.) for cyclobenzaprine. |
| popPK | Hucker_1977 | relevant | 4 | 0 | The study reports pharmacokinetic data (plasma levels, AUC, bioavailability) for cyclobenzaprine in humans, but the extracted evidence contains only qualitative descriptions and no specific numeric parameter values (like CL, V, t1/2). |
| popPK | Ibrahim_2026 | irrelevant | 0 | 0 | This is a corrosion inhibition study focusing on electrochemical and molecular adsorption mechanisms, not a pharmacokinetic study of drug disposition. |
| popPK | Jalali_2024 | irrelevant | 1 | 0 | This is a general rheumatology review that briefly mentions a study on sublingual cyclobenzaprine for fibromyalgia but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Khan_2022 | irrelevant | 0 | 0 | The study is a clinical outcomes analysis comparing opioid overdose risk, not a pharmacokinetic study, and cyclobenzaprine is used as a comparator for safety. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding opioid toxicity involving polypharmacy, and while cyclobenzaprine is mentioned as a contributing drug, no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for cyclobenzaprine are reported. |
| popPK | Majid_2021 | irrelevant | 0 | 0 | The study is an ex-vivo permeation study focusing on formulation development and method standardization, not in-vivo pharmacokinetic disposition parameters. |
| popPK | Majid_2021_2 | irrelevant | 1 | 0 | The study is an in vitro/ex vivo permeation study reporting transport parameters (Papp, flux) rather than in vivo disposition parameters (CL, Vd, t1/2) for cyclobenzaprine. |
| PGx | Michalets_1998 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (fluoxetine inhibiting CYP2D6) leading to toxicity, but does not report a genetic variant or pharmacogenomic effect. |
| popPK | Michalets_2000 | irrelevant | 0 | 0 | The paper is a review of drug interactions with cisapride, and cyclobenzaprine is only mentioned as a drug to be avoided due to pharmacodynamic interaction risks (QT interval prolongation), with no pharmacokinetic data or parameters for cyclobenzaprine reported. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper is a review of drug interactions with cisapride and does not discuss gene variants or cyclobenzaprine pharmacokinetics/pharmacodynamics. |
| PGx | Milani_2020 | not_relevant | 0 | 0 | The paper identifies cyclobenzaprine as a substrate for UGT2B10 using in vitro microsomes but does not report in vivo pharmacokinetic or pharmacodynamic parameter changes associated with genetic variants. |
| popPK | Moody_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study assessing inhibition of opioid metabolism, not a pharmacokinetic disposition study for cyclobenzaprine. |
| PGx | Moody_2018 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (inhibition of metabolism) between skeletal muscle relaxants and opioids in vitro; it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters for cyclobenzaprine. |
| popPK | Mozayad_2024 | irrelevant | 0 | 0 | The study is an analytical method development for determining drug content in pharmaceutical preparations, not a pharmacokinetic study. |
| popPK | Nørregaard_1995 | irrelevant | 0 | 0 | The study investigates the clinical efficacy of citalopram in fibromyalgia, with cyclobenzaprine mentioned only as background context, and contains no pharmacokinetic parameters. |
| popPK | Obach_2004 | irrelevant | 0 | 0 | The study focuses on in-vitro aldehyde oxidase inhibition by 239 drugs, including cyclobenzaprine, but does not report pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for cyclobenzaprine. |
| popPK | Patel_2013 | irrelevant | 3 | 0 | The paper mentions an in-vivo pharmacokinetic study in mice, but no quantitative PK parameters (CL, V, Ka, etc.) are provided in the extracted evidence. |
| PGx | Polepally_2016 | not_relevant | 0 | 10 | The paper reports drug-drug interactions with the 3D HCV regimen, not pharmacogenomic effects of gene variants on cyclobenzaprine. |
| popPK | Reuss_2009 | irrelevant | 0 | 0 | This is a case report describing a side effect (torticollis) with no quantitative pharmacokinetic data. |
| popPK | St_2026 | irrelevant | 1 | 0 | The paper is a clinical review of a sublingual formulation for efficacy and safety, containing no quantitative pharmacokinetic parameters or original data. |
| popPK | Stanko_1990 | irrelevant | 1 | 0 | This is a narrative review of skeletal muscle relaxants and does not report original quantitative pharmacokinetic parameters for cyclobenzaprine. |
| popPK | Walash_2019 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying the drug in tablets and spiked urine, but reports no pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Wang_1996 | not_relevant | 0 | 0 | The study identifies CYP3A4 and CYP1A2 as the primary metabolizing enzymes and explicitly concludes that CYP2D6 polymorphism does not significantly affect cyclobenzaprine metabolism, thus it does not report a pharmacogenomic effect. |
| popPK | Xu_2021 | irrelevant | 1 | 0 | This is a pharmacodynamic study of respiratory depression in rats where cyclobenzaprine is a co-administered agent; specific PK disposition parameters (CL, Vd) for cyclobenzaprine are not reported in the text, only general exposure comparisons (Cmax/AUC) are referenced in supplementary material. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
