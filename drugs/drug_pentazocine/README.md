<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;pentazocine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pentazocine_Omori2022_reference&quot;,&quot;label&quot;:&quot;Omori_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentazocine/Pentazocine_Omori2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pentazocine

- **generic name:** pentazocine
- **ATC codes:** `N02AD01`, `N02AD51`
- **DrugBank:** [DB00652](https://go.drugbank.com/drugs/DB00652) · **PubChem:** [CID 441278](https://pubchem.ncbi.nlm.nih.gov/compound/441278)
- **molar mass:** 285.431 g/mol (C19H27NO) — DrugBank
- **groups:** approved, vet_approved

## About

Pentazocine is an opioid painkiller used to treat moderate to severe pain. It is an approved medicine and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105290238](https://www.wikidata.org/wiki/Q105290238) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pentazocine | parent | 285.431 | C19H27NO | DrugBank | [441278](https://pubchem.ncbi.nlm.nih.gov/compound/441278) | Peterson_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:16 | 1:36 | 1/0/1 | 1/0/0 | 0/0/1 | 171,578/8,632 | einfracz / qwen3.8-27b | 6 | 8/10 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Omori_2022_reference](drugs/drug_pentazocine/Pentazocine_Omori2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Omori T et al., Pharmacokinetic/Pharmacodynamic Modelin…, Biological & pharmaceutical… (2022) | [10.1248/bpb.b22-00398](https://doi.org/10.1248/bpb.b22-00398) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Peterson_1979_reference](drugs/drug_pentazocine/Pentazocine_Peterson1979_reference.md) | — | 1-compartment (no model) | 2 | Peterson JE et al., Plasma pentazocine radioimmunoassay, Journal of pharmaceutical s… (1979) | [10.1002/jps.2600680530](https://doi.org/10.1002/jps.2600680530) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Omori_2022_NRS](drugs/drug_pentazocine/pd_Omori_2022_NRS.md) | Pain severity ← Pentazocine · indirect response — drug inhibits the loss of Pain severity | model (no simulator) | Omori T et al., Pharmacokinetic/Pharmacodynamic Modelin…, Biological & pharmaceutical… (2022) | [10.1248/bpb.b22-00398](https://doi.org/10.1248/bpb.b22-00398) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **OPRM1** | `Q321` · EC50 | target | [Knapman_2014](drugs/drug_pentazocine/pgx_Knapman_2014_OPRM1_Q321.md) | Knapman A et al., Buprenorphine signalling is compromised…, British journal of pharmaco… (2014) | [10.1111/bph.12785](https://doi.org/10.1111/bph.12785) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pentazocine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRK1 (target), OPRM1 (target), SIGMAR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 156 matched, 70 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fritz_1984.pdf` | Fritz AK et al., Relative bioavailability and pharmacoki…, Journal of pharmaceutical s… (1984) | popPK | 10 | [10.1002/jps.2600730311](https://doi.org/10.1002/jps.2600730311) | [6716239](https://pubmed.ncbi.nlm.nih.gov/6716239) | Quantitative half-life and elimination rate constants for pentazocine are explicitly reported, but volume of distribution and clearance are not provided in the text. |
| `Peterson_1979.pdf` | Peterson JE et al., Plasma pentazocine radioimmunoassay, Journal of pharmaceutical s… (1979) | popPK | 9 | [10.1002/jps.2600680530](https://doi.org/10.1002/jps.2600680530) | [430503](https://pubmed.ncbi.nlm.nih.gov/430503) | The paper reports quantitative PK parameters (two-compartment model, half-life, clearance) for pentazocine in beagle hounds. |
| `Omori_2025.pdf` | Omori T et al., Pentazocine Pharmacodynamics in Childre…, Paediatric anaesthesia (2025) | pd | 5 | [10.1111/pan.15135](https://doi.org/10.1111/pan.15135) | [40482011](https://www.ncbi.nlm.nih.gov/pubmed/40482011) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Barnett_2020.pdf` | Barnett ME et al., Unique Pharmacological Properties of th…, Molecular pharmacology (2020) | pd | 4 | [10.1124/mol.120.119404](https://doi.org/10.1124/mol.120.119404) | [32958572](https://www.ncbi.nlm.nih.gov/pubmed/32958572) | metadata signals extractable PD data (EC50) |
| `Candura_1990.pdf` | Candura SM et al., Interaction of sigma-compounds with rec…, Journal of neurochemistry (1990) | pd | 4 | [10.1111/j.1471-4159.1990.tb04964.x](https://doi.org/10.1111/j.1471-4159.1990.tb04964.x) | [2170583](https://www.ncbi.nlm.nih.gov/pubmed/2170583) | metadata signals extractable PD data (IC50) |
| `Matsuno_1996.pdf` | Matsuno K et al., Binding properties of SA4503, a novel a…, European journal of pharmac… (1996) | pd | 4 | [10.1016/0014-2999(96)00201-4](https://doi.org/10.1016/0014-2999(96)00201-4) | [8813641](https://www.ncbi.nlm.nih.gov/pubmed/8813641) | metadata signals extractable PD data (IC50) |
| `Pathak_2019.pdf` | Pathak S et al., Abuse Potential of Samidorphan: A Phase…, Journal of clinical pharmac… (2019) | pd | 4 | [10.1002/jcph.1343](https://doi.org/10.1002/jcph.1343) | [30476361](https://www.ncbi.nlm.nih.gov/pubmed/30476361) | metadata signals extractable PD data (Emax) |
| `Zevin_1999.pdf` | Zevin S et al., Drug interactions with tobacco smoking.…, Clinical pharmacokinetics (1999) | pgx | 8 | [10.2165/00003088-199936060-00004](https://doi.org/10.2165/00003088-199936060-00004) | [10427467](https://www.ncbi.nlm.nih.gov/pubmed/10427467) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Armstrong_2009.pdf` | Armstrong SC et al., Pharmacokinetic drug interactions of sy…, Psychosomatics (2009) | pgx | 7 | [10.1176/appi.psy.50.2.169](https://doi.org/10.1176/appi.psy.50.2.169) | [19377028](https://www.ncbi.nlm.nih.gov/pubmed/19377028) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T06:15:51.118538+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agyemang_2025 | irrelevant | 0 | 0 | The paper is a systematic review on diclofenac suppositories, and pentazocine is only mentioned as a comparable opioid, with no PK data provided. |
| PD | Agyemang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of diclofenac suppositories and does not report any pharmacodynamic or exposure-response analysis for pentazocine. |
| popPK | Alon_2021 | irrelevant | 0 | 0 | The paper is a structural biology and drug discovery study on the σ2 receptor, with no mention of pentazocine or its pharmacokinetics. |
| PD | Alon_2021 | not_relevant | 0 | 0 | The paper focuses on the sigma-2 receptor and novel ligands (Z-series, PB28), not pentazocine, and does not report PD parameters for pentazocine. |
| popPK | Altura_1983 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cerebral vascular contraction, not a pharmacokinetic study, and reports no disposition parameters for pentazocine. |
| PGx | Armstrong_2009 | not_relevant | 0 | 0 | The paper reviews pharmacokinetic drug-drug interactions (specifically CYP3A4 inhibition/induction) for pentazocine and others, but does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Barnett_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring receptor binding efficacy and potency (EC50), not pharmacokinetic disposition parameters. |
| popPK | Bidlack_1992 | irrelevant | 0 | 0 | The paper is an in vitro receptor binding study, not a pharmacokinetic study reporting disposition parameters like clearance or volume for pentazocine. |
| popPK | Candura_1990 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of sigma-receptor interactions and phosphoinositide metabolism, not a pharmacokinetic study. |
| popPK | Chen_2006 | irrelevant | 0 | 0 | The paper is an in vitro receptor binding/internalization study measuring cell surface receptor levels, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Clements_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetaminophen (paracetamol) and gastric emptying, using pentazocine only as a co-administered agent to assess interactions, without reporting PK parameters for pentazocine itself. |
| popPK | Colin_2024 | irrelevant | 0 | 0 | The paper is a review on Cassia alata bioactive compounds and does not contain any pharmacokinetic data for pentazocine. |
| PD | Colin_2024 | not_relevant | 0 | 0 | The paper is a review of Cassia alata bioactive compounds and does not mention pentazocine or report any pharmacodynamic parameters for it. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of phytochemicals and biological activities in the Helianthus genus (sunflowers) and contains no data regarding pentazocine pharmacokinetics. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not contain any pharmacodynamic or exposure-response data for pentazocine. |
| popPK | DeCoster_1995 | irrelevant | 0 | 0 | The study is an in-vitro neuroprotective mechanistic study reporting EC50 values for receptor binding, not pharmacokinetic disposition parameters. |
| popPK | Elliott_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of opioid receptor tolerance and G-protein coupling using SH-SY5Y cells, reporting no pharmacokinetic parameters for pentazocine. |
| popPK | Emmerson_1996 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and G-protein activation study, not a pharmacokinetic disposition study for pentazocine. |
| popPK | Jin_2016 | irrelevant | 0 | 0 | The study focuses on the PET tracer (-)-[(11)C]TZ659, and pentazocine is used only as a sigma-1 antagonist pretreatment agent to demonstrate tracer specificity, with no PK parameters reported for pentazocine itself. |
| popPK | Karasawa_2000 | irrelevant | 0 | 0 | The study examines the binding properties of a novel sigma receptor ligand (MS-377) in rat brain membranes, not the pharmacokinetics of pentazocine. |
| popPK | Kendzerska_2023 | irrelevant | 0 | 0 | The study is a retrospective administrative analysis of adverse health outcomes in opioid users and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for pentazocine. |
| PD | Kendzerska_2023 | not_relevant | 0 | 0 | The study is a retrospective administrative data analysis examining the association between opioid prescription characteristics (e.g., dose, type) and clinical outcomes (mortality, hospitalization) using hazard ratios; it does not report pharmacokinetic data, drug concentrations, or a pharmacodynamic exposure-response model for pentazocine. |
| PGx | Knapman_2014 | not_relevant | 4 | 2 | The paper reports a reduction in pentazocine efficacy at the N40D receptor variant, but it lacks specific fitted PK/PD parameters (like IC50 or EC50 values for pentazocine) in the provided text to establish a quantitative effect size. |
| popPK | Mather_1987 | irrelevant | 2 | 2 | The paper is a review that lists typical reported ranges for pentazocine in Table 2, but it does not present original quantitative PK data or a specific population PK model for pentazocine as the subject. |
| PD | Mather_1987 | not_relevant | 1 | 0 | The text is a qualitative review discussing why pentazocine's blood concentrations are not determinants of its analgesic response, without providing any numeric PD parameters or concentration-effect data. |
| popPK | Muratspahić_2023 | irrelevant | 0 | 0 | The paper focuses on the structural design of kappa-opioid receptor ligands and does not report pharmacokinetic parameters for pentazocine. |
| PD | Muratspahić_2023 | not_relevant | 0 | 0 | The paper focuses on the design and structural validation of a new peptide-drug conjugate (DNCP-β-NalA) and does not report pharmacodynamic or exposure-response data for pentazocine. |
| popPK | Nguyen_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of dextromethorphan, using pentazocine only as a radioligand for in-vitro binding assays rather than as a subject drug for pharmacokinetic analysis. |
| PD | Nguyen_2014 | not_relevant | 0 | 0 | The paper studies dextromethorphan, not pentazocine; pentazocine is only used as a radioligand in binding assays. |
| popPK | Omori_2022 | relevant | 10 | 2 | The study reports a population PK model for pentazocine, but the specific numeric parameter values are contained in Table 2 and Figure 2, which are referenced in the text but not included in the provided evidence. |
| popPK | Omori_2025 | irrelevant | 1 | 0 | The study is a pharmacodynamic simulation using parameters fixed from a prior source (Hamunen et al.) and reports no original quantitative PK parameter values for pentazocine. |
| popPK | Pathak_2019 | irrelevant | 0 | 0 | The study is a behavioral abuse potential trial using pentazocine only as a positive control, with no pharmacokinetic parameter reporting. |
| popPK | Rybczynska_2008 | irrelevant | 0 | 0 | The study is an in vitro investigation of sigma receptor occupancy and cytotoxicity in cell lines, not a pharmacokinetic study of pentazocine disposition. |
| popPK | Sesaazi_2021 | irrelevant | 0 | 0 | Pentazocine is used only as a positive control in a behavioral pharmacology study of a plant extract, with no pharmacokinetic parameters reported. |
| popPK | Shram_2022 | irrelevant | 0 | 0 | The study evaluates the abuse potential of difelikefalin, with pentazocine serving only as an active comparator; no pharmacokinetic parameters for pentazocine are reported. |
| PD | Shram_2022 | not_relevant | 2 | 1 | The study reports treatment differences in peak effects (Emax) for pentazocine compared to placebo and difelikefalin, but does not provide a concentration-effect or dose-response curve, nor does it report specific PD parameters (like EC50 or slope) for pentazocine. |
| popPK | Soriani_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of pentazocine's mechanism of action in frog cells and does not report any pharmacokinetic parameters. |
| popPK | Suzuki_1997 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding pentazocine pharmacokinetics. |
| PD | Suzuki_1997 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding pentazocine or pharmacodynamics. |
| popPK | Tyers_1980 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of antinociception in rodents and does not report any pharmacokinetic parameters for pentazocine. |
| popPK | Valodia_2022 | irrelevant | 0 | 0 | The paper is a review focusing on phenytoin metabolism and the effects of cigarette smoke/nicotine, with no mention of pentazocine. |
| PD | Valodia_2022 | not_relevant | 0 | 0 | The paper is a literature review regarding phenytoin and smoking/nicotine, and does not contain any pharmacodynamic or exposure-response data for pentazocine. |
| popPK | VonVoigtlander_1983 | irrelevant | 0 | 0 | The paper reports behavioral withdrawal data (hyperalgesia/writhing) in mice, not pharmacokinetic disposition parameters for pentazocine. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis for postoperative nausea and vomiting prevention that does not mention pentazocine or report any pharmacokinetic parameters. |
| popPK | Weinstein_2018 | irrelevant | 0 | 0 | The paper is a systematic review of regional anaesthesia for postoperative pain prevention and does not report pharmacokinetic parameters for pentazocine. |
| popPK | Weinstein_2018_2 | irrelevant | 0 | 0 | The paper is a clinical review of regional anesthesia for postoperative pain and does not contain pharmacokinetic parameters for pentazocine. |
| popPK | Zeng_2019 | irrelevant | 0 | 0 | Pentazocine is used only as a sigma-1 receptor ligand comparator in a cell death mechanism study; no PK parameters are reported. |
| PD | Zeng_2019 | not_relevant | 4 | 4 | The paper reports dose-response curves and EC50 values for sigma-2 ligands (e.g., siramesine, SW43) and binding affinities for pentazocine, but pentazocine is used only as a sigma-1 ligand to mask binding sites or test for blockade, and no PD parameters (EC50, Emax) are reported for pentazocine itself. |
| PGx | Zevin_1999 | not_relevant | 2 | 2 | Mentions CYP polymorphisms in smoking-induced pathways (CYP1A1/1A2) but does not report genetic effects on PK/PD of pentazocine, which is only listed as a drug affected by smoking. |
| popPK | Zhu_1997 | irrelevant | 0 | 0 | This is an in-vitro receptor binding/signaling study measuring agonist potency and efficacy, not a pharmacokinetic study of pentazocine. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:15 UTC</sub>
