<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Cycloguanil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cycloguanil_Chotsiri2021_reference&quot;,&quot;label&quot;:&quot;Chotsiri_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloguanil/Cycloguanil_Chotsiri2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Cycloguanil

- **generic name:** Cycloguanil
- **ATC codes:** `P01BB02`
- **DrugBank:** [DB14763](https://go.drugbank.com/drugs/DB14763) · **PubChem:** not captured
- **groups:** approved

## About

Cycloguanil is an antimalarial agent belonging to the biguanide class, used to treat malaria. It is an approved drug, but it is not widely used on its own; it is mainly known as the active metabolite of proguanil.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cycloguanil | parent | 251.718 | C11H14ClN5 | PubChem | [9049](https://pubchem.ncbi.nlm.nih.gov/compound/9049) | Khwarg_2024 |
| chlorcycloguanil | metabolite | — (mass units only) | — | — | — | — |
| proguanil | metabolite | 253.734 | C11H16ClN5 | PubChem | [4923](https://pubchem.ncbi.nlm.nih.gov/compound/4923) | Khwarg_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:59 | 21:58 | 1/3/0 | 1/0/0 | 3/0/9 | 589,594/26,760 | ollama / glm-5.3-flash | 21 | 1/18 | 21/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chotsiri_2021_reference](drugs/drug_cycloguanil/Cycloguanil_Chotsiri2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 3 | Chotsiri P et al., Piperaquine Pharmacokinetics during Int…, Antimicrobial agents and ch… (2021) | [10.1128/aac.01150-20](https://doi.org/10.1128/aac.01150-20) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Khwarg_2024_reference](drugs/drug_cycloguanil/Cycloguanil_Khwarg2024_reference.md) | — | parent + metabolite (no model) | 0 | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Na-Bangchang_2005_reference](drugs/drug_cycloguanil/Cycloguanil_NaBangchang2005_reference.md) | — | parent + metabolite (no model) | 0 | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Watkins_1987_reference](drugs/drug_cycloguanil/Cycloguanil_Watkins1987_reference.md) | — | general linear (no model) | 0 | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lochner_2014_5_HT3_response](drugs/drug_cycloguanil/pd_Lochner_2014_5_HT3_response.md) | 5-HT3 receptor response (inhibition of 5-HT-evoked current) ← cycloguanil · inhibition effect | — | Lochner M et al., The antimalarial drug proguanil is an a…, The Journal of pharmacology… (2014) | [10.1124/jpet.114.218461](https://doi.org/10.1124/jpet.114.218461) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green" title="the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.">quantitative</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Khwarg_2024](drugs/drug_cycloguanil/pgx_Khwarg_2024_CYP2C19_Q27.md) | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--green" title="the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.">quantitative</span> | **SLC22A1** | `Q27` · CL/F | transport | [Khwarg_2024](drugs/drug_cycloguanil/pgx_Khwarg_2024_SLC22A1_Q27.md) | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2C9_safety.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q40` · Fab | transport | [Hsin_2020](drugs/drug_cycloguanil/pgx_Hsin_2020_ABCB1_Q40.md) | Hsin CH et al., Combinations of common SNPs of the tran…, Scientific reports (2020) | [10.1038/s41598-020-69326-y](https://doi.org/10.1038/s41598-020-69326-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | **SLC22A1 (OCT1)** | `Q410` · Kp | transport | [Morse_2021](drugs/drug_cycloguanil/pgx_Morse_2021_SLC22A1_OCT1_Q410.md) | Morse BL et al., Expansion of Knowledge on OCT1 Variant…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.631793](https://doi.org/10.3389/fphar.2021.631793) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Park_2019](drugs/drug_cycloguanil/pgx_Park_2019_CYP3A5_Q100.md) | Park JY et al., Influence of midazolam-related genetic…, Scientific reports (2019) | [10.1038/s41598-019-52517-7](https://doi.org/10.1038/s41598-019-52517-7) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MDR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Park_2019](drugs/drug_cycloguanil/pgx_Park_2019_MDR1_Q100.md) | Park JY et al., Influence of midazolam-related genetic…, Scientific reports (2019) | [10.1038/s41598-019-52517-7](https://doi.org/10.1038/s41598-019-52517-7) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_ABCB1_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2B6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2B6_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2C19_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2D6_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A4** | `Q34` · Css | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP3A4_Q34.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cycloguanil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | brain | `CYP2D6` metabolism | paper PGx gene |
| metabolism | kidney | `CYP3A5` metabolism | paper PGx gene |
| metabolism | liver | `CYP2B6` metabolism, `CYP2C19` metabolism, `CYP2C9` safety_allele, `CYP2D6` metabolism, `CYP3A4` metabolism, `CYP3A5` metabolism, `SLC22A1` transport | paper PGx gene |
| metabolism | small intestine | `CYP3A4` metabolism, `CYP3A5` metabolism | paper PGx gene |

<sub>Actors without a tissue in the table: MDR1 (transport), PDF (inhibitor), SLC22A1 (OCT1) (transport).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 233 matched, 85 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Na-Bangchang_2005.pdf` | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | popPK | 8 | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) | [16041597](https://pubmed.ncbi.nlm.nih.gov/16041597) | Cycloguanil (active metabolite of proguanil) PK parameters (CL_R, t1/2z, metabolic and AUC ratios) are reported numerically in the abstract for pregnant women with malaria. |
| `Watkins_1987.pdf` | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | popPK | 8 | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) | [2884288](https://pubmed.ncbi.nlm.nih.gov/2884288) | Reports quantitative single-compartment parameters (elimination rate constant 0.0624 h⁻¹, availability 0.2398 h⁻¹) for cycloguanil, the active metabolite of proguanil, measured in human subjects. |
| `McGready_2003.pdf` | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | popPK | 6 | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) | [12955371](https://pubmed.ncbi.nlm.nih.gov/12955371) | Cycloguanil (active metabolite of proguanil) is a study analyte in a population-PK analysis, but the abstract reports numeric Cl/F, Vd/F and half-life only for atovaquone and proguanil; cycloguanil's parameter values are not shown and likely reside in tables/figures not provided. |
| `Lochner_2014.pdf` | Lochner M et al., The antimalarial drug proguanil is an a…, The Journal of pharmacology… (2014) | pd | 4 | [10.1124/jpet.114.218461](https://doi.org/10.1124/jpet.114.218461) | [25277140](https://www.ncbi.nlm.nih.gov/pubmed/25277140) | metadata signals extractable PD data (IC50) |
| `Thapar_2003.pdf` | Thapar MM et al., Pharmacodynamic interactions among atov…, Transactions of the Royal S… (2003) | pd | 4 | [10.1016/s0035-9203(03)90162-3](https://doi.org/10.1016/s0035-9203(03)90162-3) | [15228254](https://www.ncbi.nlm.nih.gov/pubmed/15228254) | metadata signals extractable PD data (EC50) |
| `Wang_2015.pdf` | Wang Y et al., Capitate glandular trichomes of Paragut…, Journal of agricultural and… (2015) | pd | 4 | [10.1021/acs.jafc.5b04113](https://doi.org/10.1021/acs.jafc.5b04113) | [26513276](https://www.ncbi.nlm.nih.gov/pubmed/26513276) | metadata signals extractable PD data (EC50) |
| `Brazeau_2021.pdf` | Brazeau D et al., Association of ABCC2 Haplotypes to Myco…, Journal of clinical pharmac… (2021) | pgx | 8 | [10.1002/jcph.1932](https://doi.org/10.1002/jcph.1932) | [34169529](https://www.ncbi.nlm.nih.gov/pubmed/34169529) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Funakoshi_2019.pdf` | Funakoshi R et al., Effects of proton pump inhibitors, esom…, British journal of clinical… (2019) | pgx | 8 | [10.1111/bcp.13914](https://doi.org/10.1111/bcp.13914) | [30845361](https://www.ncbi.nlm.nih.gov/pubmed/30845361) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Somogyi_1996.pdf` | Somogyi AA et al., Pharmacokinetic evaluation of proguanil…, British journal of clinical… (1996) | pgx | 8 | [10.1111/j.1365-2125.1996.tb00179.x](https://doi.org/10.1111/j.1365-2125.1996.tb00179.x) | [8866915](https://www.ncbi.nlm.nih.gov/pubmed/8866915) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Thapar_2002.pdf` | Thapar MM et al., Time-dependent pharmacokinetics and dru…, European journal of clinica… (2002) | pgx | 8 | [10.1007/s00228-002-0426-9](https://doi.org/10.1007/s00228-002-0426-9) | [11956669](https://www.ncbi.nlm.nih.gov/pubmed/11956669) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Soyinka_2010.pdf` | Soyinka JO et al., Alteration of pharmacokinetics of progu…, European journal of pharmac… (2010) | pgx | 7 | [10.1016/j.ejps.2009.11.012](https://doi.org/10.1016/j.ejps.2009.11.012) | [19961932](https://www.ncbi.nlm.nih.gov/pubmed/19961932) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Birkett_1994.pdf` | Birkett DJ et al., In vitro proguanil activation to cyclog…, British journal of clinical… (1994) | pgx | 5 | [10.1111/j.1365-2125.1994.tb05707.x](https://doi.org/10.1111/j.1365-2125.1994.tb05707.x) | [8054246](https://www.ncbi.nlm.nih.gov/pubmed/8054246) | metadata signals extractable PGX data (CYP3A) |
| `Bolaji_2002.pdf` | Bolaji OO et al., Polymorphic oxidative metabolism of pro…, European journal of clinica… (2002) | pgx | 5 | [10.1007/s00228-002-0509-7](https://doi.org/10.1007/s00228-002-0509-7) | [12451432](https://www.ncbi.nlm.nih.gov/pubmed/12451432) | metadata signals extractable PGX data (CYP2C19) |
| `Brosen_2015.pdf` | Brosen K, Pharmacogenetics of drug oxidation via…, Drug metabolism and persona… (2015) | pgx | 5 | [10.1515/dmdi-2014-0029](https://doi.org/10.1515/dmdi-2014-0029) | [25719307](https://www.ncbi.nlm.nih.gov/pubmed/25719307) | metadata signals extractable PGX data (CYP2D6) |
| `Helsby_1998.pdf` | Helsby NA et al., Hepatic cytochrome P450 CYP2C activity…, Acta dermato-venereologica (1998) | pgx | 5 | [10.1080/000155598433359](https://doi.org/10.1080/000155598433359) | [9534880](https://www.ncbi.nlm.nih.gov/pubmed/9534880) | metadata signals extractable PGX data (CYP2C) |
| `Kaneko_1999.pdf` | Kaneko A et al., Intrinsic efficacy of proguanil against…, The Journal of infectious d… (1999) | pgx | 5 | [10.1086/314683](https://doi.org/10.1086/314683) | [10068594](https://www.ncbi.nlm.nih.gov/pubmed/10068594) | metadata signals extractable PGX data (CYP2C19) |
| `Partovian_1995.pdf` | Partovian C et al., Comparison of chloroguanide and mepheny…, Clinical pharmacology and t… (1995) | pgx | 5 | [10.1016/0009-9236(95)90241-4](https://doi.org/10.1016/0009-9236(95)90241-4) | [7554698](https://www.ncbi.nlm.nih.gov/pubmed/7554698) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-07T06:52:17.026958+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agomo_2016 | not_relevant | 2 | 5 | Reports parasite resistance-marker genotypes (Pfcrt/Pfmdr1/Pfdhfr) vs parasitaemia, not host pharmacogenomic effects on cycloguanil PK/PD parameters. |
| popPK | Aikio_2025 | irrelevant | 0 | 0 | This is a cell/molecular biology study of TDP-43 phosphorylation and methylation in ALS with no cycloguanil PK data or parameters. |
| PGx | Arfeen_2014 | not_relevant | 3 | 0 | Computational chemistry study of CYP2C19-catalyzed proguanil cyclization mechanism; no gene variant effect on PK/PD parameters reported. |
| popPK | Ariefta_2023 | irrelevant | 0 | 0 | This is an in vitro/in vivo antimalarial efficacy study of phebestin with no cycloguanil PK parameters reported. |
| PGx | Bapiro_2001 | not_relevant | 2 | 5 | Reports cycloguanil inhibition of CYP2D6 (Ki), not a pharmacogenomic effect of a gene variant on cycloguanil PK/PD. |
| PGx | Biswas_2001 | not_relevant | 3 | 3 | Parasite DHFR mutations linked to cycloguanil resistance qualitatively, not a host pharmacogenomic effect on PK/PD parameters. |
| PGx | Brazeau_2021 | not_relevant | 0 | 0 | Paper concerns mycophenolic acid, not cycloguanil; no cycloguanil PK/PD data. |
| popPK | Canevarolo_2026 | irrelevant | 0 | 0 | This is a genomics/epigenomics study of multiple myeloma with no pharmacokinetic data or parameters for cycloguanil. |
| popPK | Chotsiri_2021 | irrelevant | 0 | 0 | This is a population PK study of piperaquine in pregnant women; cycloguanil is only mentioned as a comparator drug with no PK parameters for it. |
| PGx | Diekstra_2015 | not_relevant | 0 | 0 | Paper concerns sunitinib, not cycloguanil; no PK/PD parameter effects reported. |
| popPK | Elias_2026 | irrelevant | 0 | 0 | This is a review of gene-editing therapies for neurological disorders with no cycloguanil PK data or parameters. |
| popPK | Ettema_2025 | irrelevant | 0 | 0 | This is a rehabilitation study of gait training devices with no pharmacokinetic data or cycloguanil content whatsoever. |
| popPK | Farrar_2024 | irrelevant | 0 | 0 | This is an in vitro antibiotic susceptibility phenotyping study in E. coli with no cycloguanil PK parameters. |
| PGx | Ferraro_2014 | not_relevant | 2 | 3 | Viral NS3 variants affect drug resistance (PD efficacy proxy), not a measured PK/PD parameter of cycloguanil; different drug entirely. |
| popPK | Francesconi_2018 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiviral SAR study of cycloguanil-like dihydrotriazine derivatives; no PK parameters (CL, V, ka, half-life, or PK model) for cycloguanil are reported, only EC50/Ki values in vitro. |
| PGx | Funakoshi_2019 | not_relevant | 3 | 5 | CYP2C19 genotype was only used to enroll extensive metabolizers; reported effects are drug–drug interactions (esomeprazole/vonoprazan) on proguanil/cycloguanil PK, not a genotype-driven PK/PD effect. |
| popPK | Guilhaumou_2011 | irrelevant | 0 | 0 | This is a population PK study of vincristine, not cycloguanil; no cycloguanil parameters are reported. |
| PGx | Guilhaumou_2011 | not_relevant | 10 | 5 | Paper is about vincristine, not cycloguanil; no cycloguanil PK/PD data present. |
| PGx | Helsby_1990 | not_relevant | 4 | 5 | In vitro microsome kinetics only; genetic polymorphism (CYP2C19) is inferred, not measured as a genotype effect on PK/PD parameters. |
| popPK | Hsin_2020 | irrelevant | 0 | 0 | This is a population-PK study of digoxin (P-gp probe substrate), not cycloguanil; no cycloguanil parameters appear anywhere. |
| popPK | Li_2010 | irrelevant | 0 | 0 | Enzyme biochemistry study of cyclodextrin glycosyltransferase, no cycloguanil pharmacokinetic parameters. |
| popPK | Lochner_2014 | irrelevant | 0 | 0 | In-vitro pharmacology study of 5-HT3 receptor binding/antagonism; no PK disposition parameters for cycloguanil. |
| popPK | McGready_2003 | relevant | 6 | 2 | Cycloguanil (active metabolite of proguanil) is a study analyte in a population-PK analysis, but the abstract reports numeric Cl/F, Vd/F and half-life only for atovaquone and proguanil; cycloguanil's parameter values are not shown and likely reside in tables/figures not provided. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | Study protocol for acoziborole in gambiense HAT; no cycloguanil PK parameters reported. |
| PGx | Park_2012 | not_relevant | 0 | 0 | Study of GNLY polymorphisms and HBV clearance; no cycloguanil PK/PD parameters reported. |
| PGx | Partovian_1995 | not_relevant | 3 | 4 | All subjects were extensive metabolizers; no genotype/phenotype contrast on cycloguanil PK is reported, only drug-drug interactions. |
| PGx | Rana_2022 | not_relevant | 2 | 5 | Reports prevalence of Pfdhfr mutations (including cycloguanil-resistance A16V/S108T absence) as resistance markers, not an effect of genotype on a PK/PD parameter of cycloguanil. |
| PGx | Rasmussen_1998 | not_relevant | 3 | 5 | In vitro enzyme inhibition study of CYP2C19 metabolism; no gene variant/genotype effect on cycloguanil PK/PD parameters reported. |
| PGx | Siame_2015 | not_relevant | 2 | 3 | Reports parasite dhfr/dhps mutation prevalence (resistance markers), not a pharmacogenomic effect on cycloguanil PK/PD parameters. |
| PGx | Soyinka_2010 | not_relevant | 2 | 5 | This is a drug-drug interaction (efavirenz inhibiting CYP2C19) affecting proguanil/cycloguanil PK, not a gene variant/genotype/phenotype effect. |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| popPK | Tonelli_2017 | irrelevant | 0 | 0 | This is an antiviral SAR/medicinal chemistry study of cycloguanil analogues; no PK disposition parameters (CL, V, half-life, population-PK model) for cycloguanil are reported. |
| popPK | Vaubel_2025 | irrelevant | 0 | 0 | This is a PK study of navtemadlin (MDM2 inhibitor) in mice, not cycloguanil; no cycloguanil parameters appear. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | Natural products chemistry paper about plant diterpenoids with no cycloguanil pharmacokinetic data. |
| PGx | Wright_1995 | not_relevant | 2 | 5 | In vitro inhibition of cycloguanil formation by CYP2C19 substrates; no gene variant/genotype/phenotype effect on PK/PD parameters reported. |
| PGx | Yang_2023 | not_relevant | 2 | 0 | Only CYP2C19 *1/*1 extensive metabolizers were enrolled; no genotype/phenotype comparison of cycloguanil PK was performed—effects are drug–drug interactions, not pharmacogenomic. |
| popPK | Youssef_2026 | irrelevant | 0 | 0 | This is a pharmacovigilance review of cell and gene therapies with no cycloguanil PK data or parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:52 UTC</sub>
