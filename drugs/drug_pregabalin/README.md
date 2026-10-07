<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;pregabalin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pregabalin_Bae2016_reference&quot;,&quot;label&quot;:&quot;Bae_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pregabalin

- **generic name:** pregabalin
- **ATC codes:** `N02BF02`, `N03AX16`
- **DrugBank:** [DB00230](https://go.drugbank.com/drugs/DB00230) · **PubChem:** [CID 5486971](https://pubchem.ncbi.nlm.nih.gov/compound/5486971)
- **molar mass:** 159.2261 g/mol (C8H17NO2) — DrugBank
- **groups:** approved, investigational

## About

Pregabalin is used for epilepsy, anxiety disorders, and various types of neuropathic pain such as neuralgia. It is widely used and authorised in the European Union, where several products remain on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412174](https://www.wikidata.org/wiki/Q412174) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pregabalin | parent | 159.226 | C8H17NO2 | DrugBank | [5486971](https://pubchem.ncbi.nlm.nih.gov/compound/5486971) | Bender_2009, Chan_2021, Hong_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:20 | 5:09 | 1/4/2 | 3/0/2 | 1/0/0 | 272,175/19,023 | einfracz / qwen3.8-27b | 19 | 2/18 | 19/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Bae_2016_reference](drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Bae EK et al., Factors influencing topiramate clearanc…, Seizure (2016) | [10.1016/j.seizure.2016.02.002](https://doi.org/10.1016/j.seizure.2016.02.002) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.389). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Chan_2021_reference](drugs/drug_pregabalin/Pregabalin_Chan2021_reference.md) | — | 1-compartment (no model) | 4 (+4 cov.) | Chan PLS et al., Pregabalin Population Pharmacokinetic a…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2132](https://doi.org/10.1002/cpt.2132) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Hong_2016_reference](drugs/drug_pregabalin/Pregabalin_Hong2016_reference.md) | — | 1-compartment (no model) | 9 | Hong T et al., Comparison of oral absorption models fo…, Drug design, development an… (2016) | [10.2147/DDDT.S123318](https://doi.org/10.2147/DDDT.S123318) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.692). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Bender_2009_reference](drugs/drug_pregabalin/Pregabalin_Bender2009_reference.md) | — | 2-compartment (no model) | 6 | Bender G et al., Population pharmacokinetic model of the…, Pharmaceutical research (2009) | [10.1007/s11095-009-9942-y](https://doi.org/10.1007/s11095-009-9942-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Feng_2001_reference](drugs/drug_pregabalin/Pregabalin_Feng2001_reference.md) | — | 1-compartment (no model) | 0 | Feng MR et al., Brain microdialysis and PK/PD correlati…, European journal of drug me… (2001) | [10.1007/BF03190385](https://doi.org/10.1007/BF03190385) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Park_2023_reference](drugs/drug_pregabalin/Pregabalin_Park2023_reference.md) | — | 1-compartment (no model) | 0 | Park M et al., Pharmacokinetic properties of a new sus…, Translational and clinical… (2023) | [10.12793/tcp.2023.31.e20](https://doi.org/10.12793/tcp.2023.31.e20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2018_reference](drugs/drug_pregabalin/Pregabalin_van2018_reference.md) | — | 1-compartment (no model) | 0 | van Esdonk MJ et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12318](https://doi.org/10.1002/psp4.12318) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Arnold_2017_PGIC](drugs/drug_pregabalin/pd_Arnold_2017_PGIC.md) | Patient Global Impression of Change ← pregabalin · direct Emax (saturable) effect | — | Arnold LM et al., Dose-response of pregabalin for diabeti…, Postgraduate medicine (2017) | [10.1080/00325481.2017.1384691](https://doi.org/10.1080/00325481.2017.1384691) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Arnold_2017_pain](drugs/drug_pregabalin/pd_Arnold_2017_pain.md) | pain ← pregabalin · direct Emax (saturable) effect | — | Arnold LM et al., Dose-response of pregabalin for diabeti…, Postgraduate medicine (2017) | [10.1080/00325481.2017.1384691](https://doi.org/10.1080/00325481.2017.1384691) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Arnold_2017_sleep_quality](drugs/drug_pregabalin/pd_Arnold_2017_sleep_quality.md) | sleep quality ← pregabalin · direct Emax (saturable) effect | — | Arnold LM et al., Dose-response of pregabalin for diabeti…, Postgraduate medicine (2017) | [10.1080/00325481.2017.1384691](https://doi.org/10.1080/00325481.2017.1384691) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Feng_2001_anticonvulsant_effect](drugs/drug_pregabalin/pd_Feng_2001_anticonvulsant_effect.md) | anticonvulsant effect ← pregabalin · direct sigmoid Emax (Hill) effect | — | Feng MR et al., Brain microdialysis and PK/PD correlati…, European journal of drug me… (2001) | [10.1007/BF03190385](https://doi.org/10.1007/BF03190385) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2018_cold_pressor_PTT](drugs/drug_pregabalin/pd_van_2018_cold_pressor_PTT.md) | pain tolerance threshold of the cold pressor ← pregabalin · indirect response — drug inhibits the production of pain tolerance threshold of the cold pressor | — | van Esdonk MJ et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12318](https://doi.org/10.1002/psp4.12318) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2018_electrical_stimulation_PTT](drugs/drug_pregabalin/pd_van_2018_electrical_stimulation_PTT.md) | pain tolerance threshold of electrical stimulation ← pregabalin · indirect response — drug inhibits the production of pain tolerance threshold of electrical stimulation | — | van Esdonk MJ et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12318](https://doi.org/10.1002/psp4.12318) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chan_2021_LSR28](drugs/drug_pregabalin/pd_Chan_2021_LSR28.md) | natural log‐transformed 28‐day seizure rate ← pregabalin · direct Emax (saturable) effect | model (no simulator) | Chan PLS et al., Pregabalin Population Pharmacokinetic a…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2132](https://doi.org/10.1002/cpt.2132) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Miller_2003_monthly_seizure_frequency](drugs/drug_pregabalin/pd_Miller_2003_monthly_seizure_frequency.md) | monthly seizure frequency ← pregabalin · direct Emax (saturable) effect | model (no simulator) | Miller R et al., Exposure-response analysis of pregabali…, Clinical pharmacology and t… (2003) | [10.1016/S0009-9236(03)00049-3](https://doi.org/10.1016/S0009-9236(03)00049-3) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green" title="the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.">quantitative</span> <span class="pk-badge pk-badge--neutral">model only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **NAT2** | `Q22` · CL | metabolism | [Calleja_2025](drugs/drug_pregabalin/pgx_Calleja_2025_NAT2_Q22.md) | Calleja S et al., Impact of Genetic Variants on Pregabali…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18020151](https://doi.org/10.3390/ph18020151) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pregabalin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `NAT2` metabolism | paper PGx gene |
| metabolism | small intestine | `NAT2` metabolism | paper PGx gene |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA2D1 (modulator), SLC1A1 (other), SLC7A5 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 84 matched, 52 returned
- **screened:** 18  ·  **relevant:** 7
- **records:** 7  ·  extracted 1  ·  needs_review 2  ·  rejected 4  ·  stale 7
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bockbrader_2011.pdf` | Bockbrader HN et al., Population pharmacokinetics of pregabal…, Epilepsia (2011) | popPK | 10 | [10.1111/j.1528-1167.2010.02933.x](https://doi.org/10.1111/j.1528-1167.2010.02933.x) | [21269291](https://pubmed.ncbi.nlm.nih.gov/21269291) | The paper reports a population PK model for pregabalin, but the specific numeric parameter estimates (CL/F, V, ka) are not present in the provided evidence text. |
| `Chew_2019.pdf` | Chew M et al., Population Pharmacokinetics of Pregabal…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1450](https://doi.org/10.1002/jcph.1450) | [31183879](https://pubmed.ncbi.nlm.nih.gov/31183879) | The paper is a population PK study of pregabalin ER in humans, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided text evidence. |
| `Feng_2001.pdf` | Feng MR et al., Brain microdialysis and PK/PD correlati…, European journal of drug me… (2001) | popPK | 8 | [10.1007/BF03190385](https://doi.org/10.1007/BF03190385) | [11554426](https://pubmed.ncbi.nlm.nih.gov/11554426) | Reports quantitative BBB permeability (CLin/CLout) and PK/PD parameters (ECe50, Keo) for pregabalin in rats. |

<sub>queue written 2026-10-07T07:15:58.141825+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2021 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of action (microglial IL-10/β-endorphin expression) and efficacy in neuropathic rats, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for pregabalin. |
| popPK | Al-Ghazawi_2014 | irrelevant | 1 | 0 | The study reports bioequivalence metrics (AUC, Cmax) but the text provided does not contain specific quantitative values for clearance, volume, or half-life, and the conclusion is based on equivalence ratios rather than absolute PK parameter extraction. |
| PGx | Alcantara-Montero_2017 | not_relevant | 0 | 0 | The paper reviews desvenlafaxine's pharmacology in neuropathic pain and mentions pregabalin only as a standard-of-care comparator, reporting no pharmacogenomic effects on pregabalin's PK/PD parameters. |
| popPK | Arnold_2017 | irrelevant | 0 | 0 | This is a dose-response analysis for efficacy and adverse events in pain indications, not a pharmacokinetic study reporting disposition parameters like CL or V. |
| PGx | Aylón_2026 | not_relevant | 0 | 0 | The paper is a review that explicitly categorizes pregabalin as having "not enough information" regarding P-glycoprotein substrate status and does not report any gene variant effects on PK or PD parameters. |
| popPK | Bae_2016 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for topiramate, not pregabalin, which is only listed as a concomitant medication. |
| PD | Bender_2009 | not_relevant | 2 | 0 | The paper focuses on population PK modeling and simulation for study design; it does not report actual PD data or numeric PD parameters (Emax, EC50) for pregabalin, only simulating the precision of future PD estimates. |
| popPK | Bockbrader_2011 | irrelevant | 10 | 0 | The paper reports a population PK model for pregabalin, but the specific numeric parameter estimates (CL/F, V, ka) are not present in the provided evidence text. |
| PGx | Bollinger_2025 | not_relevant | 0 | 0 | The paper states that the genetic profile cannot explain the treatment failure of pregabalin, implying no specific pharmacogenomic effect on its PK or PD was identified or reported. |
| PGx | Chan_2014 | not_relevant | 0 | 0 | The paper investigates the substrate status of the drug via a protein transporter, not a human gene variant altering a PK/PD parameter. |
| PGx | Chesler_2003 | not_relevant | 2 | 1 | The study reports qualitative strain-dependent differences in drug sensitivity (PD) in mice but does not provide specific genotype variants or quantitative pharmacokinetic/pharmacodynamic parameter estimates. |
| PGx | Cheung_2026 | not_relevant | 0 | 0 | The paper describes a clinical case report involving CYP2D6 inhibition but does not report pharmacokinetic data or quantitative changes in PK/PD parameters specifically for pregabalin. |
| PGx | Cheung_2026_2 | not_relevant | 0 | 0 | The paper discusses dextromethorphan and CYP2D6, but does not report any pharmacogenomic effect for pregabalin. |
| PGx | Cheung_2026_3 | not_relevant | 2 | 0 | The paper reports a clinical case involving a CYP2D6 inhibitor affecting dextromethorphan, with no specific pharmacokinetic or pharmacodynamic data for pregabalin. |
| PGx | Cheung_2026_4 | not_relevant | 0 | 0 | The paper is a case report of an OCD treatment regimen where CYP2D6 inhibition is used to potentiate dextromethorphan, not to analyze the PK/PD of pregabalin. |
| popPK | Chew_2019 | relevant | 10 | 2 | The paper is a population PK study of pregabalin ER in humans, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided text evidence. |
| PGx | Desmarais_2010 | not_relevant | 0 | 0 | The paper is a review of drug interactions for tamoxifen and mentions pregabalin only as a treatment option for hot flashes, without reporting any pharmacogenomic effects on PK or PD. |
| PGx | Galgani_2018 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic interactions between DOACs and AEDs, but it does not report on how a gene variant/genotype changes a PK/PD parameter of pregabalin. |
| popPK | Gewandter_2022 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing pain scores and treatment response to pregabalin, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Jung_2022 | irrelevant | 0 | 0 | This is a medicinal chemistry study developing novel neuropathic pain compounds, and pregabalin is only mentioned as a pharmacophore source or comparator; no pharmacokinetic parameters are reported. |
| PD | Jung_2022 | not_relevant | 0 | 0 | The paper reports pharmacological data for novel tianeptine derivatives, not pregabalin; pregabalin is only mentioned as a pharmacophore source for hybridization. |
| PGx | Kakuda_2011 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions of etravirine; pregabalin is only mentioned as a non-interacting antiepileptic in a list, with no pharmacogenomic analysis or PK/PD effect reported for it. |
| PGx | Karroum_2008 | not_relevant | 0 | 0 | The paper is a general review of Restless-Legs Syndrome and mentions pregabalin only as a standard treatment option, without discussing any genetic variants or pharmacogenomic effects on its PK or PD. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | Pregabalin is used only as a comparator drug to test resistance in a mouse model, and no PK parameters for it are reported. |
| PD | Kumar_2020 | not_relevant | 1 | 0 | The paper reports a qualitative lack of efficacy (resistance) for pregabalin at a single dose in a mouse model, but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Manville_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study regarding potassium channel activation by gabapentin and pregabalin, containing no pharmacokinetic disposition parameters. |
| popPK | Miller_2003 | irrelevant | 0 | 0 | The study is an exposure-response analysis of seizure frequency and dose, reporting pharmacodynamic endpoints rather than quantitative pharmacokinetic disposition parameters (CL, V, ka). |
| PGx | Muhn_2022 | not_relevant | 0 | 0 | The paper is a qualitative case report on pain management that mentions pregabalin optimization but does not report any gene variant altering pregabalin's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Raccah-Tebeka_2021 | not_relevant | 0 | 0 | The paper is a clinical review of menopausal hot flush management and does not report pharmacogenomic effects on pregabalin's pharmacokinetics or pharmacodynamics. |
| PGx | Regland_2015 | not_relevant | 0 | 0 | The paper discusses vitamin B12/folic acid response and MTHFR genotypes, with pregabalin mentioned only as a concomitant medication in mild responders, not as the drug of interest for a pharmacogenomic effect. |
| PGx | Rodríguez-Arias_2015 | not_relevant | 0 | 0 | The paper is a general review of therapies for opiate addiction and does not contain specific pharmacogenomic data regarding pregabalin PK/PD. |
| PGx | Sharma_2026 | not_relevant | 0 | 0 | The paper is a general review of cancer pain management strategies and mentions the use of pregabalin and the concept of pharmacogenomics, but it does not report specific gene-variant effects on pregabalin's PK or PD parameters. |
| PGx | Sideras_2010 | not_relevant | 0 | 0 | The paper is a review of nonhormonal management for hot flashes and does not report specific pharmacogenomic effects on the PK or PD parameters of pregabalin. |
| PGx | Sloan_2022 | not_relevant | 0 | 0 | The text is a general review of painful diabetic neuropathy treatment and only mentions genotype stratification as a general concept without reporting specific pharmacogenomic effects on pregabalin PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:16 UTC</sub>
