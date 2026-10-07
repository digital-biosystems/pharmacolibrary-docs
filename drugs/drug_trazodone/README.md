<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;trazodone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trazodone_Cuomo2026v2_reference&quot;,&quot;label&quot;:&quot;Cuomo_2026_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trazodone/Trazodone_Cuomo2026v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# trazodone

- **generic name:** trazodone
- **ATC codes:** `N06AX05`
- **DrugBank:** [DB00656](https://go.drugbank.com/drugs/DB00656) · **PubChem:** [CID 5533](https://pubchem.ncbi.nlm.nih.gov/compound/5533)
- **molar mass:** 371.864 g/mol (C19H22ClN5O) — DrugBank
- **groups:** approved, investigational

## About

Trazodone is an antidepressant used for depression, and also for conditions such as anxiety, insomnia, sleep-wake disorders, delirium and neurotic disorders. It is an approved medicine in widespread clinical use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411457](https://www.wikidata.org/wiki/Q411457) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trazodone | parent | 371.864 | C19H22ClN5O | DrugBank | [5533](https://pubchem.ncbi.nlm.nih.gov/compound/5533) | Knych_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:03 | 1:58 | 1/0/1 | 0/0/1 | 0/0/3 | 104,385/6,196 | ollama / glm-5.3-flash | 7 | 1/7 | 5/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Cuomo_2026_2_reference](drugs/drug_trazodone/Trazodone_Cuomo2026v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Cuomo A et al., A narrative review on trazodone as a mu…, Annals of general psychiatry (2026) | [10.1186/s12991-026-00643-8](https://doi.org/10.1186/s12991-026-00643-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Knych_2017_reference](drugs/drug_trazodone/Trazodone_Knych2017_reference.md) | — | 1-compartment (no model) | 5 | Knych HK et al., Pharmacokinetics and selected pharmacod…, American journal of veterin… (2017) | [10.2460/ajvr.78.10.1182](https://doi.org/10.2460/ajvr.78.10.1182) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Marcoli_2001_depolarization_evoked_glutamate_overflow](drugs/drug_trazodone/pd_Marcoli_2001_depolarization_evoked_glutamate_overflow.md) | depolarization-evoked glutamate overflow ← trazodone · direct Emax (saturable) effect | model (no simulator) | Marcoli M et al., Inhibitory presynaptic 5-hydroxytryptam…, The Journal of pharmacology… (2001) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Wiss_2026](drugs/drug_trazodone/pgx_Wiss_2026_ABCB1_Q100.md) | Wiss FM et al., CYP2D6 Phenotype as a Predictor of Adve…, Journal of clinical psychop… (2026) | [10.1097/JCP.0000000000002123](https://doi.org/10.1097/JCP.0000000000002123) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q31` · CL_ratio | metabolism | [Wiss_2026](drugs/drug_trazodone/pgx_Wiss_2026_CYP2D6_Q31.md) | Wiss FM et al., CYP2D6 Phenotype as a Predictor of Adve…, Journal of clinical psychop… (2026) | [10.1097/JCP.0000000000002123](https://doi.org/10.1097/JCP.0000000000002123) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A5** | `Q45` · fm | metabolism | [Wiss_2026](drugs/drug_trazodone/pgx_Wiss_2026_CYP3A5_Q45.md) | Wiss FM et al., CYP2D6 Phenotype as a Predictor of Adve…, Journal of clinical psychop… (2026) | [10.1097/JCP.0000000000002123](https://doi.org/10.1097/JCP.0000000000002123) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trazodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/transport | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/transport | DrugBank actor |
| absorption | liver | `ABCB1` inducer/transport | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/transport | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/transport | DrugBank actor |
| absorption | testis | `ABCB1` inducer/transport | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` substrate, `CYP3A5` metabolism/substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), HRH1 (target), HTR1A (partial agonist), HTR1A (target), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 53 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knych_2017.pdf` | Knych HK et al., Pharmacokinetics and selected pharmacod…, American journal of veterin… (2017) | popPK | 10 | [10.2460/ajvr.78.10.1182](https://doi.org/10.2460/ajvr.78.10.1182) | [28945130](https://pubmed.ncbi.nlm.nih.gov/28945130) | PK parameters (CL, Vss, half-lives) for trazodone in horses are reported directly in the abstract. |
| `Cheng_1999.pdf` | Cheng FC et al., Pharmacokinetic and pharmacodynamic ana…, Journal of pharmaceutical a… (1999) | popPK | 7 | [10.1016/s0731-7085(98)00117-4](https://doi.org/10.1016/s0731-7085(98)00117-4) | [10704094](https://pubmed.ncbi.nlm.nih.gov/10704094) | Rat brain PK of trazodone with a one-compartment model is described, but no numeric parameter values (kel, V, CL) appear in the evidence. |
| `Zhu_2019.pdf` | Zhu JL et al., Pharmacokinetics of trazodone sustained…, International journal of cl… (2019) | popPK | 7 | [10.5414/CP203482](https://doi.org/10.5414/CP203482) | [31262398](https://pubmed.ncbi.nlm.nih.gov/31262398) | Human PK study of trazodone SR/IR using non-compartmental analysis, but the abstract gives no numeric parameter values (they would be in tables not provided). |
| `Oggianu_2023.pdf` | Oggianu L et al., PK/PD analysis of trazodone and gabapen…, Clinical and translational… (2023) | pd | 5 | [10.1111/cts.13472](https://doi.org/10.1111/cts.13472) | [36785922](https://www.ncbi.nlm.nih.gov/pubmed/36785922) | metadata signals extractable PD data (PK/PD) |
| `Malomvölgyi_1991.pdf` | Malomvölgyi B et al., Comparison of serotonin agonistic and a…, Acta physiologica Hungarica (1991) | pd | 4 | not captured | [1814162](https://www.ncbi.nlm.nih.gov/pubmed/1814162) | metadata signals extractable PD data (EC50) |
| `Marcoli_1998.pdf` | Marcoli M et al., Trazodone is a potent agonist at 5-HT2C…, The Journal of pharmacology… (1998) | pd | 4 | not captured | [9618398](https://www.ncbi.nlm.nih.gov/pubmed/9618398) | metadata signals extractable PD data (EC50) |
| `Han_2022.pdf` | Han M et al., Effects of CYP2D6 Genetic Polymorphism…, Chemical research in toxico… (2022) | pgx | 8 | [10.1021/acs.chemrestox.1c00327](https://doi.org/10.1021/acs.chemrestox.1c00327) | [34936353](https://www.ncbi.nlm.nih.gov/pubmed/34936353) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mihara_1997.pdf` | Mihara K et al., Relationship between the CYP2D6 genotyp…, Psychopharmacology (1997) | pgx | 8 | [10.1007/s002130050376](https://doi.org/10.1007/s002130050376) | [9335086](https://www.ncbi.nlm.nih.gov/pubmed/9335086) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mihara_2001.pdf` | Mihara K et al., Effects of genetic polymorphism of CYP1…, Pharmacology & toxicology (2001) | pgx | 8 | [10.1034/j.1600-0773.2001.d01-115.x](https://doi.org/10.1034/j.1600-0773.2001.d01-115.x) | [11393588](https://www.ncbi.nlm.nih.gov/pubmed/11393588) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Saiz-Rodríguez_2017.pdf` | Saiz-Rodríguez M et al., Pharmacogenetics of trazodone in health…, Pharmacogenomics (2017) | pgx | 8 | [10.2217/pgs-2017-0116](https://doi.org/10.2217/pgs-2017-0116) | [29061081](https://www.ncbi.nlm.nih.gov/pubmed/29061081) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Saiz-Rodríguez_2018.pdf` | Saiz-Rodríguez M et al., Effect of ABCB1 C3435T Polymorphism on…, Basic & clinical pharmacolo… (2018) | pgx | 8 | [10.1111/bcpt.13031](https://doi.org/10.1111/bcpt.13031) | [29723928](https://www.ncbi.nlm.nih.gov/pubmed/29723928) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Costa_2025.pdf` | Costa Alegre MD et al., Metabolism of m-CPP, trazodone, nefazod…, Drug metabolism reviews (2025) | pgx | 7 | [10.1080/03602532.2025.2465482](https://doi.org/10.1080/03602532.2025.2465482) | [39945551](https://www.ncbi.nlm.nih.gov/pubmed/39945551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kalgutkar_2003.pdf` | Kalgutkar AS et al., Assessment of the contributions of CYP3…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.3.243](https://doi.org/10.1124/dmd.31.3.243) | [12584149](https://www.ncbi.nlm.nih.gov/pubmed/12584149) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Schwasinger-Schmidt_2019.pdf` | Schwasinger-Schmidt TE et al., Other Antidepressants, Handbook of experimental ph… (2019) | pgx | 7 | [10.1007/164_2018_167](https://doi.org/10.1007/164_2018_167) | [30194544](https://www.ncbi.nlm.nih.gov/pubmed/30194544) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yasui_1995.pdf` | Yasui N et al., Inhibition of trazodone metabolism by t…, Therapeutic drug monitoring (1995) | pgx | 7 | [10.1097/00007691-199508000-00003](https://doi.org/10.1097/00007691-199508000-00003) | [7482685](https://www.ncbi.nlm.nih.gov/pubmed/7482685) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zalma_2000.pdf` | Zalma A et al., In vitro metabolism of trazodone by CYP…, Biological psychiatry (2000) | pgx | 7 | [10.1016/s0006-3223(99)00176-6](https://doi.org/10.1016/s0006-3223(99)00176-6) | [10745059](https://www.ncbi.nlm.nih.gov/pubmed/10745059) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-07T00:01:45.079716+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baumann_1992 | not_relevant | 2 | 1 | Abstract only discusses general PK of SSRIs and speculates on genetic polymorphism candidacy; no gene-variant effect on trazodone PK/PD parameters reported. |
| popPK | Cheng_1999 | relevant | 7 | 3 | Rat brain PK of trazodone with a one-compartment model is described, but no numeric parameter values (kel, V, CL) appear in the evidence. |
| popPK | Clineschmidt_1985 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study in rat stomach fundus; trazodone is only a comparator antagonist with no PK parameters. |
| PD | Clineschmidt_1985 | not_relevant | 1 | 0 | The paper characterizes 5-HT receptors in rat stomach fundus and mentions trazodone only as a less potent competitive antagonist without providing specific numeric PD parameters (like Ki or IC50) for trazodone in the text. |
| PGx | Costa_2025 | not_relevant | 3 | 2 | Abstract mentions CYP3A4 metabolism of trazodone generally but no gene variant effect on a PK/PD parameter is reported. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | Trazodone is only listed as an interfering drug in DDI analysis; no gene variant/genotype effect on trazodone PK/PD is reported. |
| popPK | Cuomo_2026 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Cuomo_2026 | not_relevant | 0 | 0 | The text is a correction notice regarding dose unit conversions in a narrative review and contains no pharmacodynamic data, models, or numeric PD parameters. |
| popPK | Cuomo_2026_2 | irrelevant | 4 | 6 | Narrative review citing PK values (Vd 0.84 L/kg, CL 5.3 L/h, t½ 7.3 h) from primary sources, not an original PK study; some values are present in text/table. |
| PD | Cuomo_2026_2 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively describes dose-dependent effects (e.g., sedation at 25-75 mg vs. antidepressant at 150-300 mg) but does not report or provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| PGx | Davis_2007 | not_relevant | 2 | 1 | Mentions CYP metabolism of trazodone but reports no gene variant effect on any PK/PD parameter. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | Paper is about nefazodone, not trazodone, and contains no pharmacogenomic effects on PK/PD parameters. |
| popPK | Gex-Fabry_2004 | irrelevant | 0 | 0 | Trazodone is only a permitted co-medication; the study models venlafaxine/ODV kinetics and response, not trazodone PK parameters. |
| PGx | Han_2022 | not_relevant | 2 | 3 | Pharmacogenomic effects (CYP2D6 variants) are reported for dacomitinib metabolism; trazodone appears only as an interacting inhibitor, not as a drug whose PK/PD parameter is changed by a genotype. |
| PGx | Holm_1999 | not_relevant | 0 | 0 | Review of mirtazapine efficacy/tolerability; trazodone only mentioned as comparator with no pharmacogenomic PK/PD data. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | Trazodone appears only in a herbal interaction case report (ginkgo-induced coma); no gene variant/genotype effect on trazodone PK/PD is reported. |
| PGx | Kalgutkar_2003 | not_relevant | 0 | 0 | Trazodone appears only as a CYP3A inhibitor of haloperidol metabolism; no gene variant effect on trazodone's own PK/PD is reported. |
| popPK | Malomvölgyi_1991 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Malomvölgyi_1991 | not_relevant | 0 | 0 | The paper studies a different drug (Trelibet/EGYT-475) and its metabolite, not trazodone. |
| popPK | Marcoli_1998 | irrelevant | 0 | 0 | no_text gate: only 148 chars of text extracted (&lt; 400) |
| PD | Marcoli_1998 | not_relevant | 3 | 2 | The paper describes a qualitative mechanism of action (agonism at 5-HT2C receptors) but does not provide numeric PD parameters (e.g., EC50, Emax) or an exposure-response curve for trazodone. |
| popPK | Marcoli_2001 | irrelevant | 0 | 0 | In-vitro pharmacology study of trazodone as a receptor agonist in rat synaptosomes; no PK parameters. |
| popPK | Maura_2000 | irrelevant | 0 | 0 | In-vitro pharmacology study of serotonin receptor signaling; trazodone is only a tool compound with no PK parameters. |
| PD | Maura_2000 | not_relevant | 2 | 1 | The study is an in vitro slice experiment testing receptor mechanisms; it reports a single qualitative inhibition by trazodone at 1 microM without deriving a dose-response curve or numeric PD parameters (e.g., EC50) for the drug. |
| PGx | Mihara_1997_2 | not_relevant | 2 | 3 | This is a drug–drug interaction study using a CYP2D6 inhibitor (haloperidol), not a gene variant/genotype/phenotype effect on trazodone PK/PD. |
| PGx | Moog_2022 | not_relevant | 0 | 0 | The paper tests trazodone's antiseizure effect in stxbp1b mutant zebrafish; the gene variant defines the disease model, not a pharmacogenomic effect on trazodone PK/PD parameters. |
| PGx | Najibi_2016 | not_relevant | 2 | 3 | Study uses enzyme inhibitors in rat hepatocytes, not gene variants/genotypes, so no pharmacogenomic effect on trazodone PK/PD is reported. |
| popPK | Oggianu_2023 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| popPK | Pancrazio_1998 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Na+ channel blockade; no pharmacokinetic disposition parameters for trazodone. |
| PGx | Petrucci_2025 | not_relevant | 2 | 3 | Study characterizes CYP-mediated trazodone metabolism in vitro across species, but no gene variant/genotype/phenotype effect on PK/PD parameters in subjects is reported. |
| PGx | Pradeepkumar_2022 | not_relevant | 0 | 0 | This is a drug–drug interaction study (trazodone on pioglitazone PK/PD) with no gene variant, genotype, or pharmacogenomic phenotype reported. |
| PGx | Rotzinger_1998 | not_relevant | 3 | 5 | Identifies CYP3A4 as responsible for trazodone metabolism via correlation/inhibition, but no genetic variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Schwasinger-Schmidt_2019 | not_relevant | 0 | 0 | The text mentions trazodone metabolism by CYP3A4 but reports no gene variant/genotype effect on any PK or PD parameter. |
| PGx | Wen_2008 | not_relevant | 3 | 3 | In vitro CYP2D6-mediated bioactivation/metabolite formation only; no genotype/phenotype effect on trazodone PK/PD parameters in vivo. |
| PGx | Yasui_1995 | not_relevant | 4 | 6 | Drug-drug interaction (thioridazine inhibiting CYP2D6) inferring CYP2D6 involvement, but no genotype/phenotype-stratified PK comparison reported. |
| PGx | Zalma_2000 | not_relevant | 2 | 5 | In vitro enzyme inhibition study of trazodone metabolism by CYP3A and inhibitors; no gene variant/genotype/phenotype effect on in vivo PK/PD parameters reported. |
| PGx | Zaręba_2022 | not_relevant | 0 | 0 | Paper reports synthesis and receptor affinity of trazodone analogues; no gene variant/genotype effect on PK or PD parameters of trazodone. |
| popPK | Zhu_2019 | relevant | 7 | 2 | Human PK study of trazodone SR/IR using non-compartmental analysis, but the abstract gives no numeric parameter values (they would be in tables not provided). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:01 UTC</sub>
