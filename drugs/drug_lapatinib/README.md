<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lapatinib&quot;}]"></div>

# lapatinib

- **generic name:** lapatinib
- **ATC codes:** `L01EH01`
- **DrugBank:** [DB01259](https://go.drugbank.com/drugs/DB01259) · **PubChem:** [CID 208908](https://pubchem.ncbi.nlm.nih.gov/compound/208908)
- **molar mass:** 581.058 g/mol (C29H26ClFN4O4S) — DrugBank
- **groups:** approved, investigational

## About

Lapatinib is a HER2-targeting protein kinase inhibitor used to treat certain breast cancers, including rare breast tumors. It is approved and authorised in the European Union for breast cancer, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420323](https://www.wikidata.org/wiki/Q420323) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lapatinib | parent | 581.058 | C29H26ClFN4O4S | DrugBank | [208908](https://pubchem.ncbi.nlm.nih.gov/compound/208908) | Qi_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:11 | 27:56 | 0/1/1 | 9/0/0 | 0/0/2 | 393,219/61,673 | openai / gpt-6-luna | 33 | 5/17 | 30/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Qi_2023_reference](drugs/drug_lapatinib/Lapatinib_Qi2023_reference.md) | — | 1-compartment (no model) | 1 | Qi T et al., Dissecting sources of variability in pa…, European journal of pharmac… (2023) | [10.1016/j.ejps.2023.106467](https://doi.org/10.1016/j.ejps.2023.106467) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rezai_2011_reference](drugs/drug_lapatinib/Lapatinib_Rezai2011_reference.md) | — | 1-compartment (no model) | 0 | Rezai K et al., Pharmacokinetic evaluation of the vinor…, Cancer chemotherapy and pha… (2011) | [10.1007/s00280-011-1650-8](https://doi.org/10.1007/s00280-011-1650-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gorlick_2009_cell_line_growth_inhibition](drugs/drug_lapatinib/pd_Gorlick_2009_cell_line_growth_inhibition.md) | cell line growth inhibition ← lapatinib · inhibition effect | — | Gorlick R et al., Initial testing (stage 1) of lapatinib…, Pediatric blood & cancer (2009) | [10.1002/pbc.21989](https://doi.org/10.1002/pbc.21989) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hernández-Valencia_2025_Cell_viability](drugs/drug_lapatinib/pd_Hern_ndez_Valencia_2025_Cell_viability.md) | Cell viability ← Lapatinib · direct sigmoid Emax (Hill) effect | — | Hernández-Valencia J et al., Lapatinib-Resistant HER2+ Breast Cancer…, International journal of mo… (2025) | [10.3390/ijms26083763](https://doi.org/10.3390/ijms26083763) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Hoshino-Yoshino_2011_efficacy](drugs/drug_lapatinib/pd_Hoshino_Yoshino_2011_efficacy.md) | efficacy ← lapatinib · direct Emax (saturable) effect | — | Hoshino-Yoshino A et al., Bridging from preclinical to clinical s…, Drug metabolism and pharmac… (2011) | [10.2133/dmpk.DMPK-11-RG-043](https://doi.org/10.2133/dmpk.DMPK-11-RG-043) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Howley_2024_PDT](drugs/drug_lapatinib/pd_Howley_2024_PDT.md) | PDT ← lapatinib · stimulation effect | — | Howley R et al., Effectiveness of lapatinib for enhancin…, Photochemistry and photobio… (2024) | [10.1111/php.13936](https://doi.org/10.1111/php.13936) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Howley_2024_PpIX](drugs/drug_lapatinib/pd_Howley_2024_PpIX.md) | ALA-PpIX fluorescence ← lapatinib · stimulation effect | — | Howley R et al., Effectiveness of lapatinib for enhancin…, Photochemistry and photobio… (2024) | [10.1111/php.13936](https://doi.org/10.1111/php.13936) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">dog</span> | [Leis-Filho_2021_cell_proliferation](drugs/drug_lapatinib/pd_Leis_Filho_2021_cell_proliferation.md) | cell proliferation ← lapatinib · inhibition effect | — | Leis-Filho AF et al., Effects of Lapatinib on HER2-Positive a…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060897](https://doi.org/10.3390/pharmaceutics13060897) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Minematsu_2011_MATE1](drugs/drug_lapatinib/pd_Minematsu_2011_MATE1.md) | [(14)C]metformin transport by MATE1 ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Minematsu_2011_MATE2_K](drugs/drug_lapatinib/pd_Minematsu_2011_MATE2_K.md) | [(14)C]metformin transport by MATE2-K ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Minematsu_2011_OCT1](drugs/drug_lapatinib/pd_Minematsu_2011_OCT1.md) | [(14)C]metformin transport by OCT1 ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Minematsu_2011_OCT2](drugs/drug_lapatinib/pd_Minematsu_2011_OCT2.md) | [(14)C]metformin transport by OCT2 ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Minematsu_2011_OCT3](drugs/drug_lapatinib/pd_Minematsu_2011_OCT3.md) | [(14)C]metformin transport by OCT3 ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sanachai_2022_3CLpro](drugs/drug_lapatinib/pd_Sanachai_2022_3CLpro.md) | 3CLpro inhibition ← lapatinib · inhibition effect | — | Sanachai K et al., Identification of repurposing therapeut…, PloS one (2022) | [10.1371/journal.pone.0269563](https://doi.org/10.1371/journal.pone.0269563) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sornprasert_2025_viral_production](drugs/drug_lapatinib/pd_Sornprasert_2025_viral_production.md) | viral production ← lapatinib · inhibition effect | — | Sornprasert S et al., Effects of the fatty acid synthase inhi…, Scientific reports (2025) | [10.1038/s41598-025-95346-7](https://doi.org/10.1038/s41598-025-95346-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sornprasert_2025_virus_titer](drugs/drug_lapatinib/pd_Sornprasert_2025_virus_titer.md) | virus titer ← lapatinib · inhibition effect | — | Sornprasert S et al., Effects of the fatty acid synthase inhi…, Scientific reports (2025) | [10.1038/s41598-025-95346-7](https://doi.org/10.1038/s41598-025-95346-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Zou_2021_antiproliferative_activity_against_A431](drugs/drug_lapatinib/pd_Zou_2021_antiproliferative_activity_against_A431.md) | antiproliferative activity against A431 ← Lapatinib · inhibition effect | — | Zou M et al., Design, synthesis and anticancer evalua…, Bioorganic chemistry (2021) | [10.1016/j.bioorg.2021.105200](https://doi.org/10.1016/j.bioorg.2021.105200) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Zou_2021_antiproliferative_activity_against_SK_BR_3](drugs/drug_lapatinib/pd_Zou_2021_antiproliferative_activity_against_SK_BR_3.md) | antiproliferative activity against SK-BR-3 ← Lapatinib · inhibition effect | — | Zou M et al., Design, synthesis and anticancer evalua…, Bioorganic chemistry (2021) | [10.1016/j.bioorg.2021.105200](https://doi.org/10.1016/j.bioorg.2021.105200) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **EGFR** | `Q322` · IC50 | target | [Huang_2020](drugs/drug_lapatinib/pgx_Huang_2020_EGFR_Q322.md) | Huang LC et al., Quantitative Structure-Mutation-Activit…, BMC bioinformatics (2020) | [10.1186/s12859-020-03842-6](https://doi.org/10.1186/s12859-020-03842-6) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCG2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Inoue_2019](drugs/drug_lapatinib/pgx_Inoue_2019_ABCG2_Q100.md) | Inoue Y et al., Impact of Q141K on the Transport of Epi…, Cells (2019) | [10.3390/cells8070763](https://doi.org/10.3390/cells8070763) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lapatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` transport | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` transport | DrugBank actor |
| absorption | mammary gland | `ABCG2` transport | paper PGx gene |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` transport | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` transport | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EEF2K (inhibitor), EGFR (target), ERBB2 (target), TAP1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 408 matched, 108 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rezai_2011.pdf` | Rezai K et al., Pharmacokinetic evaluation of the vinor…, Cancer chemotherapy and pha… (2011) | popPK | 10 | [10.1007/s00280-011-1650-8](https://doi.org/10.1007/s00280-011-1650-8) | [21519841](https://pubmed.ncbi.nlm.nih.gov/21519841) | The study reports readable population-PK estimates for lapatinib, including CL, V, and ka. |

<sub>queue written 2026-10-07T01:58:45.167330+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adediji_2025 | irrelevant | 0 | 0 | This is an antiviral activity study and reports no lapatinib pharmacokinetic parameters. |
| PGx | Agustina_2021 | not_relevant | 0 | 0 | The study examines lapatinib inhibition of BCRP and changes in isoflavone metabolite exposure, not a pharmacogenomic effect on lapatinib PK or PD. |
| popPK | Bachovchin_2019 | irrelevant | 0 | 0 | This medicinal-chemistry study reports solubility and antitrypanosomal activity, not lapatinib pharmacokinetic parameters. |
| PGx | Beretta_2017 | not_relevant | 0 | 0 | The review discusses lapatinib interactions with ABC transporters and drug resistance, but reports no gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Breslin_2017 | not_relevant | 0 | 0 | The paper reports cellular cross-resistance to lapatinib and increased CYP3A4 activity in neratinib-resistant cells, but no gene variant, genotype, or phenotype effect on a lapatinib PK/PD parameter. |
| PGx | Castellino_2012 | not_relevant | 0 | 0 | The paper mentions pharmacogenetics only as a possible disposition factor and reports no genotype-specific lapatinib PK or PD effects. |
| PGx | Chan_2017 | not_relevant | 0 | 0 | The text reports no gene-related effect on a pharmacokinetic or pharmacodynamic parameter of lapatinib. |
| PGx | Chien_2014 | not_relevant | 0 | 0 | The study examines food effects and CYP3A4 inhibition but reports no gene variant, genotype, or phenotype effect on lapatinib PK or PD. |
| PGx | Dai_2015 | not_relevant | 0 | 0 | Reports lapatinib-mediated ABCB1 inhibition and altered exposure of paclitaxel/doxorubicin, but no genetic variant, genotype, or phenotype effect on lapatinib PK/PD. |
| popPK | Davies_2012 | irrelevant | 0 | 0 | Lapatinib is only a co-administered antitumor agent, with no lapatinib pharmacokinetic parameters reported. |
| PGx | Duckett_2010 | not_relevant | 0 | 0 | The text discusses lapatinib metabolism and drug interactions but reports no gene variant, genotype, or phenotype effect on its PK or PD. |
| PGx | Fontana_2014 | not_relevant | 0 | 0 | The paper mentions HLA associations with lapatinib-related liver injury, but reports no pharmacokinetic or pharmacodynamic parameter. |
| PGx | García-Lainez_2021 | not_relevant | 0 | 0 | The paper studies lapatinib and metabolite phototoxicity in vitro, but does not assess gene variants, genotypes, or phenotypes affecting a lapatinib PK or PD parameter. |
| PGx | Greshock_2008 | not_relevant | 1 | 0 | Copy-number alterations predict cell-line lapatinib sensitivity, but the text reports no effect on a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Griner_2013 | not_relevant | 0 | 0 | The study examines adipocytokine-mediated lapatinib resistance in cell lines, not a gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Hardy_2014 | not_relevant | 0 | 0 | The study examines experimentally induced CYP3A4 activity in cells, not a gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Hefti_2018 | not_relevant | 0 | 0 | The paper reports HER2 testing utilization, not an effect of a gene variant, genotype, or phenotype on lapatinib PK or PD. |
| popPK | Hernández-Valencia_2025 | irrelevant | 0 | 0 | This in-vitro cancer-resistance study reports drug concentrations and IC50 values, not lapatinib disposition parameters. |
| PGx | Herr_2018 | not_relevant | 0 | 0 | The study tests lapatinib with BRAF inhibitors in cancer cells but does not report a genetic or phenotypic effect on a lapatinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Ho_2015 | not_relevant | 1 | 0 | Genetic polymorphisms are mentioned as a possible modifier, but no specific genotype effect on a lapatinib PK or PD parameter is reported. |
| popPK | Hoshino-Yoshino_2011 | irrelevant | 2 | 0 | It compares AUC exposure but gives no readable numeric lapatinib disposition parameters in the provided evidence. |
| popPK | Howley_2024 | irrelevant | 0 | 0 | This is an in-vitro cell-line study reporting fluorescence and PDT effects, not lapatinib disposition parameters. |
| PGx | Huang_2019 | not_relevant | 0 | 0 | The text reports computational reaction mechanisms and does not describe gene variants or genotype/phenotype effects on lapatinib PK or PD. |
| PGx | Hudachek_2013 | not_relevant | 0 | 0 | The paper reports a lapatinib–docetaxel drug interaction in mice, not an effect of a gene variant, genotype, or phenotype on lapatinib PK or PD. |
| PGx | Huijberts_2020 | not_relevant | 0 | 0 | The study enrolls patients with KRAS-mutant tumors but does not report a genotype-dependent effect on lapatinib pharmacokinetic or pharmacodynamic parameters. |
| PGx | Jabbarzadeh_2020 | not_relevant | 0 | 0 | This review mentions lapatinib resistance but does not report a gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Kaniwa_2013 | not_relevant | 0 | 0 | Reports an HLA-DQA1*02:01 association with lapatinib-induced liver injury, not a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Koch_2015 | not_relevant | 0 | 0 | The paper reports a lapatinib–digoxin drug interaction, not a gene variant/genotype/phenotype effect on lapatinib PK or PD. |
| PGx | Koch_2017 | not_relevant | 0 | 0 | The study reports lapatinib’s effect on midazolam metabolism, not a genetic effect on a lapatinib PK or PD parameter. |
| PGx | Korprasertthaworn_2019 | not_relevant | 0 | 0 | The paper reports in vitro UGT enzyme inhibition by kinase inhibitors, not a genetic variant or phenotype effect on lapatinib PK or PD. |
| popPK | Li_2017 | irrelevant | 0 | 0 | Lapatinib is only part of the comparator regimen, and no lapatinib disposition parameters are reported. |
| PGx | Lin_2014 | not_relevant | 0 | 0 | The paper studies allitinib metabolism and enzyme involvement, but reports no genetic variant, genotype, or phenotype effect on lapatinib PK or PD. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | This clinical efficacy study reports no quantitative lapatinib pharmacokinetic parameters. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper reports an organoid lapatinib IC50 but does not associate it with a gene variant, genotype, or phenotype. |
| popPK | LoRusso_2011 | irrelevant | 0 | 0 | This review reports T-DM1 pharmacokinetics, while lapatinib is only mentioned as a comparator and in refractory models. |
| PGx | Madrid-Paredes_2015 | not_relevant | 0 | 0 | The review discusses biomarkers of resistance to HER2-targeted therapies but reports no gene-related change in a lapatinib PK or PD parameter. |
| PGx | Madrid-Paredes_2015_2 | not_relevant | 0 | 0 | The review discusses biomarkers of resistance to HER2-targeted therapy, not gene-related changes in a lapatinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | McCorkle_2021 | not_relevant | 0 | 0 | The paper studies lapatinib inhibition of ABCB1 and its effect on paclitaxel response, not how a genetic variant, genotype, or phenotype changes a lapatinib PK or PD parameter. |
| PGx | Minematsu_2011 | not_relevant | 0 | 0 | The OCT1 M420del variant affected sensitivity to erlotinib inhibition, not a lapatinib PK or PD parameter. |
| PGx | Miners_2017 | not_relevant | 0 | 0 | The study examines lapatinib inhibition of UGT enzymes in vitro, not how a genetic variant, genotype, or phenotype changes a lapatinib PK or PD parameter. |
| popPK | Patel_2013 | irrelevant | 0 | 0 | This is an in-vitro drug-discovery study and reports no quantitative pharmacokinetic parameters for lapatinib. |
| PGx | Radic-Sarikas_2017 | not_relevant | 0 | 0 | The study examines lapatinib inhibition of ABCB1 and its effect on intracellular YM155, not a genetic effect on a lapatinib PK or PD parameter. |
| PGx | Rocha-Lima_2007 | not_relevant | 0 | 0 | This review does not report a gene variant or genotype effect on any lapatinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Scheffler_2011 | not_relevant | 0 | 0 | The text reports pharmacogenomic effects for gefitinib and erlotinib, but none for lapatinib. |
| popPK | Schindler_2018 | irrelevant | 1 | 0 | Lapatinib is only part of the active-control treatment, and no lapatinib disposition parameters are reported. |
| PGx | Singla_2020 | not_relevant | 0 | 0 | The text discusses lapatinib generally but reports no gene variant or phenotype effect on its PK or PD parameters. |
| PGx | Smith_2009 | not_relevant | 0 | 0 | The study reports effects of ketoconazole and carbamazepine on lapatinib pharmacokinetics, not effects of a gene variant, genotype, or phenotype. |
| popPK | Sornprasert_2025 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no lapatinib disposition parameters. |
| PGx | Spraggs_2012 | not_relevant | 1 | 0 | Genotypes are associated with liver-injury outcomes, not a lapatinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Sundby_2015 | not_relevant | 0 | 0 | The paper reports in vitro drug and transporter findings but no gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Taguchi_2015 | not_relevant | 0 | 0 | The report describes a capecitabine–phenytoin drug interaction, not a genetic effect on a lapatinib PK or PD parameter. |
| PGx | Tan_2014 | not_relevant | 0 | 0 | The paper reports drug–drug effects on paclitaxel and lapatinib pharmacokinetics, but no gene variant, genotype, or phenotype effects. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | Lapatinib is only part of the active control arm, with no lapatinib disposition parameters reported. |
| PGx | Wellmann_2018 | not_relevant | 0 | 0 | The paper mentions an HLA-DQA1 association for lapatinib but reports no effect on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Whitcher_2011 | irrelevant | 1 | 0 | The reported K(trans) values describe DCE-MRI contrast-agent kinetics, not lapatinib disposition. |
| popPK | Woodring_2015 | irrelevant | 0 | 0 | This is an in-vitro antiparasitic screening study and reports no lapatinib disposition parameters. |
| popPK | Yao_2009 | irrelevant | 0 | 0 | Lapatinib is only a combination-treatment agent, and no pharmacokinetic parameters are reported. |
| PGx | Yashiro_2011 | not_relevant | 0 | 0 | The study reports cellular gene-expression changes during lapatinib combination treatment, not a gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The paper studies lapatinib’s inhibition of UGT enzymes and predicted drug–drug interactions, not how a genetic variant, genotype, or phenotype affects lapatinib’s PK or PD. |
| PGx | Zhang_2017_2 | not_relevant | 0 | 0 | ABCG2 overexpression is studied as a mechanism of resistance to mitoxantrone and topotecan; no pharmacogenomic effect on lapatinib PK or PD is reported. |
| PGx | unknown_2014 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter is reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:59 UTC</sub>
