<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;clofarabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clofarabine_Bonate2011_reference&quot;,&quot;label&quot;:&quot;Bonate_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# clofarabine

- **generic name:** clofarabine
- **ATC codes:** `L01BB06`
- **DrugBank:** [DB00631](https://go.drugbank.com/drugs/DB00631) · **PubChem:** [CID 119182](https://pubchem.ncbi.nlm.nih.gov/compound/119182)
- **molar mass:** 303.677 g/mol (C10H11ClFN5O3) — DrugBank
- **groups:** approved, investigational

## About

Clofarabine is a purine analogue anticancer drug used to treat acute lymphoblastic leukemia and acute myeloid leukemia. It is approved and used in a limited, specialist setting, mainly for relapsed or refractory childhood leukemia, with one authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5134875](https://www.wikidata.org/wiki/Q5134875) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clofarabine | parent | 303.677 | C10H11ClFN5O3 | DrugBank | [119182](https://pubchem.ncbi.nlm.nih.gov/compound/119182) | Bonate_2004, Bonate_2011, Nijstad_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:40 | 1:22 | 1/3/0 | 0/0/0 | 0/0/1 | 86,030/6,845 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bonate_2011_reference](drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Bonate PL et al., Population pharmacokinetics of clofarab…, Cancer chemotherapy and pha… (2011) | [10.1007/s00280-010-1376-z](https://doi.org/10.1007/s00280-010-1376-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bonate_2004_reference](drugs/drug_clofarabine/Clofarabine_Bonate2004_reference.md) | — | 3-compartment (no model) | 6 | Bonate PL et al., Population pharmacokinetics of clofarab…, Journal of clinical pharmac… (2004) | [10.1177/0091270004269236](https://doi.org/10.1177/0091270004269236) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Nijstad_2021_reference](drugs/drug_clofarabine/Clofarabine_Nijstad2021_reference.md) | — | 1-compartment (no model) | 2 | Nijstad AL et al., Population pharmacokinetics of clofarab…, British journal of clinical… (2021) | [10.1111/bcp.14738](https://doi.org/10.1111/bcp.14738) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019_reference](drugs/drug_clofarabine/Clofarabine_Wang2019_reference.md) | — | 1-compartment (no model) | 0 | Wang H et al., Population Pharmacokinetics of Clofarab…, Biology of blood and marrow… (2019) | [10.1016/j.bbmt.2019.04.017](https://doi.org/10.1016/j.bbmt.2019.04.017) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **DCK** | `Q322` · IC50 | metabolism | [Huang_2018](drugs/drug_clofarabine/pgx_Huang_2018_DCK_Q322.md) | Huang M et al., Clofarabine exerts antileukemic activit…, Cancer medicine (2018) | [10.1002/cam4.1323](https://doi.org/10.1002/cam4.1323) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clofarabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DCK (metabolism), DCK (substrate), DNA (other/unknown), POLA1 (inhibitor), RRM1 (inhibitor), RRM2 (inhibitor), RRM2B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bonate_2004.pdf` | Bonate PL et al., Population pharmacokinetics of clofarab…, Journal of clinical pharmac… (2004) | popPK | 10 | [10.1177/0091270004269236](https://doi.org/10.1177/0091270004269236) | [15496649](https://pubmed.ncbi.nlm.nih.gov/15496649) | The abstract explicitly reports quantitative population PK parameters (CL, V, Q) for clofarabine in pediatric patients. |
| `Bonate_2011.pdf` | Bonate PL et al., Population pharmacokinetics of clofarab…, Cancer chemotherapy and pha… (2011) | popPK | 10 | [10.1007/s00280-010-1376-z](https://doi.org/10.1007/s00280-010-1376-z) | [20582417](https://pubmed.ncbi.nlm.nih.gov/20582417) | The paper provides a detailed population pharmacokinetic analysis of clofarabine with specific numeric values for clearance, volume of distribution, and half-life directly in the text. |
| `Wang_2019.pdf` | Wang H et al., Population Pharmacokinetics of Clofarab…, Biology of blood and marrow… (2019) | popPK | 10 | [10.1016/j.bbmt.2019.04.017](https://doi.org/10.1016/j.bbmt.2019.04.017) | [31002993](https://pubmed.ncbi.nlm.nih.gov/31002993) | The paper reports a population pharmacokinetic model for clofarabine with specific numeric values for clearance, central/peripheral volumes, and intercompartmental clearance directly in the text. |
| `Patel_2015.pdf` | Patel YT et al., Preclinical examination of clofarabine…, Cancer chemotherapy and pha… (2015) | popPK | 8 | [10.1007/s00280-015-2713-z](https://doi.org/10.1007/s00280-015-2713-z) | [25724157](https://pubmed.ncbi.nlm.nih.gov/25724157) | The paper is a preclinical PK study in mice with a population model, but specific numeric values for clearance, volume, or half-life are not explicitly provided in the text, only derived ratios like Kpt,uu. |
| `Beach_2014.pdf` | Beach LB et al., Novel inhibitors of human immunodeficie…, The Journal of general viro… (2014) | pd | 4 | [10.1099/vir.0.069864-0](https://doi.org/10.1099/vir.0.069864-0) | [25103850](https://www.ncbi.nlm.nih.gov/pubmed/25103850) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T16:39:02.393407+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beach_2014 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| PD | Beach_2014 | not_relevant | 0 | 0 | The paper focuses on HIV-2 inhibitors and does not contain any pharmacodynamic or exposure-response data for clofarabine. |
| PGx | Ben_2021 | not_relevant | 2 | 0 | The paper is a review focusing on busulfan and treosulfan conditioning, and it explicitly states that pharmacogenetic evaluation of clofarabine is a future goal rather than reporting such data. |
| PGx | Contreras_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a conditioning regimen and does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of clofarabine. |
| PGx | Fukuda_2012 | not_relevant | 1 | 0 | The text is a review discussing the mechanism of ABC transporter-mediated drug resistance, but it does not report a specific gene variant, genotype, or phenotype linked to a measured pharmacokinetic or pharmacodynamic parameter of clofarabine. |
| PGx | Huang_2018 | not_relevant | 4 | 5 | The study investigates the association between DCK expression (a PD marker) and drug sensitivity (PD) in cell lines, but does not report how specific gene variants (genotypes) quantitatively alter PK parameters (like AUC, clearance) or establish a definitive PGx effect on PK for clofarabine. |
| popPK | Inaba_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sorafenib (and its metabolites), with clofarabine serving only as a covariate/concurrent drug. |
| PGx | Koh_2016 | not_relevant | 1 | 2 | The study investigates pharmacokinetics but does not report any data linking gene variants to changes in these pharmacokinetic or pharmacodynamic parameters. |
| PGx | Lamba_2007 | not_relevant | 0 | 0 | The paper reports pharmacogenomic data for deoxycytidine kinase (DCK) and its effect on cytarabine (ara-C), but does not report any PK or PD parameters specifically for clofarabine. |
| PGx | Lamba_2009 | not_relevant | 0 | 0 | The paper discusses cytarabine pharmacogenetics and only mentions clofarabine as an analog with a similar pathway, providing no specific PK/PD data for clofarabine. |
| popPK | Lindemalm_2003 | irrelevant | 1 | 0 | The study investigates in vitro cytotoxicity and cellular metabolism (EC50, nucleotide levels) rather than in vivo pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Marrero_2024 | not_relevant | 0 | 0 | The paper reports association between a pharmacogenomic score (ACS10) and clinical outcomes (EFS/OS), not the effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | Mondesir_2019 | not_relevant | 1 | 5 | The paper correlates AML mutational burden with clinical outcomes (survival/response) but does not report specific pharmacokinetic or pharmacodynamic parameter changes driven by genotype. |
| PGx | Nagai_2011 | not_relevant | 0 | 0 | The study investigates the functional interaction between deoxycytidine kinase (dCK) and ABCG2 in modulating clofarabine cytotoxicity and efflux, but it does not report a pharmacogenomic effect based on specific gene variants or genotypes on PK or PD parameters. |
| PGx | Parekh_2024 | not_relevant | 0 | 0 | The paper reports clinical response rates in Langerhans cell histiocytosis patients, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| popPK | Patel_2015 | relevant | 8 | 2 | The paper is a preclinical PK study in mice with a population model, but specific numeric values for clearance, volume, or half-life are not explicitly provided in the text, only derived ratios like Kpt,uu. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic effects of gene variants on the PK or PD of clofarabine. |
| PGx | Selukar_2025 | not_relevant | 0 | 0 | The paper focuses on visualizing survival outcomes (OS/EFS) using a pharmacogenomic score (ACS10) but does not report effects on pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | de_2008 | not_relevant | 4 | 2 | The paper reports in vitro cellular transport and resistance mechanisms for clofarabine mediated by ABCG2, but does not report human pharmacokinetic or pharmacodynamic parameters based on genetic variants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:39 UTC</sub>
