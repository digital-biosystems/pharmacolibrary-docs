<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tapentadol

- **generic name:** tapentadol
- **ATC codes:** `N02AX06`
- **DrugBank:** [DB06204](https://go.drugbank.com/drugs/DB06204) · **PubChem:** [CID 9838022](https://pubchem.ncbi.nlm.nih.gov/compound/9838022)
- **molar mass:** 221.3385 g/mol (C14H23NO) — DrugBank
- **groups:** approved

## About

Tapentadol is an opioid painkiller used to treat moderate to severe pain, including pain associated with fibromyalgia. It is an approved medicine and is widely used as an analgesic, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414463](https://www.wikidata.org/wiki/Q414463) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tapentadol | parent | 221.339 | C14H23NO | DrugBank | [9838022](https://pubchem.ncbi.nlm.nih.gov/compound/9838022) | Jończyk_2022, Khalil_2020, Watson_2019 |
| tapentadol-O-glucuronide | metabolite | 397.468 | C20H31NO7 | PubChem | [71752323](https://pubchem.ncbi.nlm.nih.gov/compound/71752323) | Jończyk_2022 |
| tapentadol-O-sulfate | metabolite | 301.401 | C14H23NO4S | PubChem | [71752327](https://pubchem.ncbi.nlm.nih.gov/compound/71752327) | Jończyk_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:43 | 2:38 | 2/1/2 | 1/0/1 | 0/0/2 | 237,097/15,289 | einfracz / qwen3.8-27b | 15 | 4/11 | 13/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.462). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Khalil_2020_final](drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md) | ▶ model + simulator | 1-compartment, oral | 6 (+3 cov.) | Khalil F et al., Population Pharmacokinetics of Tapentad…, Journal of pain research (2020) | [10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Watson_2019_reference](drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+2 cov.) | Watson E et al., Population pharmacokinetic modeling to…, Journal of pain research (2019) | [10.2147/JPR.S208454](https://doi.org/10.2147/JPR.S208454) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Jończyk_2022_reference](drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference.md) | — | general linear (no model) | 6 | Jończyk R et al., Multiple Dose Pharmacokinetics of Tapen…, Journal of pain research (2022) | [10.2147/JPR.S364902](https://doi.org/10.2147/JPR.S364902) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Khalil_2020_final_final_model_with_fixed_exponents](drugs/drug_tapentadol/Tapentadol_Khalil2020_final_final_model_with_fixed_exponents.md) | — | 1-compartment (no model) | 6 (+3 cov.) | Khalil F et al., Population Pharmacokinetics of Tapentad…, Journal of pain research (2020) | [10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2017_reference](drugs/drug_tapentadol/Tapentadol_Zhang2017_reference.md) | — | 1-compartment (no model) | 0 | Zhang L et al., Quantifying the Exposure of Tapentadol…, Clinical drug investigation (2017) | [10.1007/s40261-016-0482-z](https://doi.org/10.1007/s40261-016-0482-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Steel_2026_N1](drugs/drug_tapentadol/pd_Steel_2026_N1.md) | N1 amplitude evoked by low-intensity electrical stimulation ← tapentadol · direct Emax (saturable) effect | — | Steel KAJ et al., Preclinical assay of the effects of lac…, Pain (2026) | [10.1097/j.pain.0000000000003810](https://doi.org/10.1097/j.pain.0000000000003810) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Xu_2012_constipation](drugs/drug_tapentadol/pd_Xu_2012_constipation.md) | constipation ← tapentadol · time-to-event model | — | Xu XS et al., Pharmacokinetic and pharmacodynamic mod…, Pharmaceutical research (2012) | [10.1007/s11095-012-0786-5](https://doi.org/10.1007/s11095-012-0786-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Xu_2012_nausea](drugs/drug_tapentadol/pd_Xu_2012_nausea.md) | nausea ← tapentadol · time-to-event model | — | Xu XS et al., Pharmacokinetic and pharmacodynamic mod…, Pharmaceutical research (2012) | [10.1007/s11095-012-0786-5](https://doi.org/10.1007/s11095-012-0786-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Xu_2012_vomiting](drugs/drug_tapentadol/pd_Xu_2012_vomiting.md) | vomiting ← tapentadol · time-to-event model | — | Xu XS et al., Pharmacokinetic and pharmacodynamic mod…, Pharmaceutical research (2012) | [10.1007/s11095-012-0786-5](https://doi.org/10.1007/s11095-012-0786-5) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **OPRM1** | `Q38` · E | target | [Takemura_2024](drugs/drug_tapentadol/pgx_Takemura_2024_OPRM1_Q38.md) | Takemura M et al., Comparison of the Effects of OPRM1 A118…, Journal of pain and symptom… (2024) | [10.1016/j.jpainsymman.2023.09.017](https://doi.org/10.1016/j.jpainsymman.2023.09.017) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **CYP2C19** | `Q3` · CLint | metabolism | [Xu_2022](drugs/drug_tapentadol/pgx_Xu_2022_CYP2C19_Q3.md) | Xu RA et al., Effects of CYP2C19 variants on the meta…, Iranian journal of basic me… (2022) | [10.22038/IJBMS.2022.56996.12710](https://doi.org/10.22038/IJBMS.2022.56996.12710) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tapentadol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` metabolism/substrate, `CYP2C9` substrate, `CYP2D6` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 46 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 2  ·  rejected 1  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Göhler_2013.pdf` | Göhler K et al., Comparative pharmacokinetics and bioava…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201722](https://doi.org/10.5414/CP201722) | [23357834](https://pubmed.ncbi.nlm.nih.gov/23357834) | The paper reports quantitative pharmacokinetic parameters for tapentadol in humans, including clearance, volume of distribution, half-life, and bioavailability, which are explicitly provided in the results text. |
| `Lavy_2014.pdf` | Lavy E et al., Use of the novel atypical opioid tapent…, Journal of veterinary pharm… (2014) | popPK | 10 | [10.1111/jvp.12123](https://doi.org/10.1111/jvp.12123) | [24611613](https://pubmed.ncbi.nlm.nih.gov/24611613) | The study reports PK parameters for tapentadol in goats, but specific numeric values for clearance (CL) and volume of distribution (V) are not present in the provided text, only half-life and bioavailability. |
| `Xu_2010.pdf` | Xu XS et al., Population pharmacokinetics of tapentad…, Clinical pharmacokinetics (2010) | popPK | 10 | [10.2165/11535390-000000000-00000](https://doi.org/10.2165/11535390-000000000-00000) | [20818833](https://pubmed.ncbi.nlm.nih.gov/20818833) | The paper reports a population PK model for tapentadol but the specific numeric values for clearance, volume, and half-life are not listed in the provided abstract text, only variability percentages and qualitative covariate effects. |
| `Xu_2012.pdf` | Xu XS et al., Pharmacokinetic and pharmacodynamic mod…, Pharmaceutical research (2012) | popPK | 10 | [10.1007/s11095-012-0786-5](https://doi.org/10.1007/s11095-012-0786-5) | [22618801](https://pubmed.ncbi.nlm.nih.gov/22618801) | The paper describes population PK modeling for tapentadol in humans, but no numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Karbownik_2020.pdf` | Karbownik A et al., In vivo assessment of potential for UGT…, Biomedicine & pharmacothera… (2020) | pgx | 7 | [10.1016/j.biopha.2020.110530](https://doi.org/10.1016/j.biopha.2020.110530) | [32712531](https://www.ncbi.nlm.nih.gov/pubmed/32712531) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Natoli_2021.pdf` | Natoli S et al., Should we be concerned when COVID-19-po…, European review for medical… (2021) | pgx | 7 | [10.26355/eurrev_202107_26399](https://doi.org/10.26355/eurrev_202107_26399) | [34337735](https://www.ncbi.nlm.nih.gov/pubmed/34337735) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Muriel_2024.pdf` | Muriel J et al., Use of CYP2D6 substrates and inhibitors…, Biomedicine & pharmacothera… (2024) | pgx | 5 | [10.1016/j.biopha.2024.116882](https://doi.org/10.1016/j.biopha.2024.116882) | [38876046](https://www.ncbi.nlm.nih.gov/pubmed/38876046) | metadata signals extractable PGX data (CYP2D6) |
| `Pesce_2025.pdf` | Pesce AJ et al., CYP450-based reclassification of urinar…, Journal of opioid management (2025) | pgx | 5 | [10.5055/jom.1001](https://doi.org/10.5055/jom.1001) | [42429026](https://www.ncbi.nlm.nih.gov/pubmed/42429026) | metadata signals extractable PGX data (CYP450) |

<sub>queue written 2026-10-07T05:41:32.925173+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bairam_2018 | not_relevant | 5 | 2 | The paper reports in vitro kinetic parameters (Vmax, Km) for SULT1A3 allozymes, not in vivo pharmacokinetic or pharmacodynamic parameters of tapentadol. |
| PGx | Barbosa_2016 | not_relevant | 1 | 0 | The paper is a review focusing on metabolomics and general metabolic pathways rather than reporting specific quantitative pharmacogenomic effects on PK parameters for tapentadol. |
| PGx | Chand_2025 | not_relevant | 0 | 0 | The text describes a case of Crigler-Najjar Syndrome and management with phenobarbitone, and does not report any pharmacogenomic data or PK/PD changes for the drug tapentadol. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper catalogs pharmacogenomic genotypes and predicted metabolizer phenotypes for 30 patients but does not report measured pharmacokinetic or pharmacodynamic parameters for tapentadol, only classifying patients as optimal or suboptimal metabolizers. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The paper reports the effects of drug-drug interactions on the urinary metabolic ratio of tapentadol, not pharmacogenomic effects (genotype) on PK/PD parameters. |
| PGx | DePriest_2015 | not_relevant | 0 | 0 | The paper is a general review of opioid metabolism and mentions tapentadol is metabolized by UGTs, but it does not report any gene variant, genotype, or phenotype effects on tapentadol's PK or PD parameters. |
| PGx | Domínguez-Oliva_2021 | not_relevant | 0 | 0 | The paper is a veterinary review comparing tramadol and tapentadol in dogs and cats, and does not report human pharmacogenomic data or link gene variants to specific PK/PD changes in tapentadol. |
| PGx | Heneedak_2025 | not_relevant | 0 | 0 | The study focuses on drug-drug pharmacokinetic interactions, not pharmacogenomic effects on tapentadol. |
| popPK | Huntjens_2016 | irrelevant | 0 | 0 | no_text gate: only 396 chars of text extracted (&lt; 400) |
| PGx | Karbownik_2020 | not_relevant | 0 | 0 | The study investigates drug-drug interactions in rats, not pharmacogenomic effects (gene variants) on tapentadol PK/PD parameters in humans. |
| popPK | Lavy_2014 | relevant | 10 | 4 | The study reports PK parameters for tapentadol in goats, but specific numeric values for clearance (CL) and volume of distribution (V) are not present in the provided text, only half-life and bioavailability. |
| PGx | Manandhar_2022 | not_relevant | 0 | 0 | The paper describes in vitro receptor pharmacology (intrinsic efficacy) using transfected cell lines, not a pharmacogenomic effect (genotype-to-PK/PD mapping) in patients or models assessing the drug's systemic behavior. |
| PGx | Mercadante_2011 | not_relevant | 1 | 0 | The paper is a general review discussing drug development strategies for opioids and mentioning pharmacogenetics as a future concept, without reporting specific gene-drug interactions for tapentadol. |
| PGx | Muriel_2024 | not_relevant | 0 | 0 | The paper examines the clinical effects of CYP2D6 drug-drug interactions (substrates/inhibitors) on analgesic outcomes, not the pharmacokinetic or pharmacodynamic effects of CYP2D6 genotype/phenotype on tapentadol. |
| PGx | Natoli_2021 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between opioids and COVID-19 therapies, not pharmacogenomic effects on tapentadol. |
| PGx | Pesce_2025 | not_relevant | 2 | 8 | The paper reclassifies population-level urinary metabolic ratio cutoffs based on CYP450 genotype frequencies rather than reporting specific pharmacokinetic or pharmacodynamic changes for tapentadol in genetically defined subgroups. |
| PGx | Pesce_2025_2 | not_relevant | 0 | 0 | The paper provides reference intervals for urinary metabolic ratios to detect deviations but does not report specific gene-variant effects on tapentadol pharmacokinetics. |
| PGx | Roulet_2021 | not_relevant | 1 | 0 | The paper is a general narrative review comparing tapentadol and tramadol; it mentions that tapentadol is not significantly metabolized by CYP450 enzymes, but it does not report specific pharmacogenomic effects of gene variants on tapentadol's PK or PD parameters. |
| PGx | Roulet_2021_2 | not_relevant | 0 | 0 | The paper states tapentadol is not significantly metabolized by CYP450 and lacks genetic variability, but does not report a specific pharmacogenomic effect or provide data on how a variant changes PK/PD parameters. |
| PGx | Sloan_2022 | not_relevant | 0 | 0 | The paper is a review of treatments for diabetic neuropathy and does not report pharmacogenomic effects on tapentadol PK/PD parameters. |
| PGx | Smith_2014 | not_relevant | 0 | 0 | The text is a general overview of opioid-induced nausea and vomiting and does not mention tapentadol, gene variants, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Steel_2026 | irrelevant | 1 | 0 | The paper is a preclinical electrophysiology study measuring neural response modulation by tapentadol, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Terlinden_2010 | not_relevant | 0 | 0 | The study characterizes the pharmacodynamic activity of tapentadol metabolites and their in vivo exposure in a general population, without reporting any pharmacogenomic effects (gene variant/genotype differences) on PK or PD parameters. |
| PGx | Wang_2026 | not_relevant | 2 | 1 | The paper is a structural modification review of tramadol derivatives and does not report specific pharmacogenomic data or quantitative PK/PD changes for tapentadol. |
| popPK | Xu_2010 | relevant | 10 | 2 | The paper reports a population PK model for tapentadol but the specific numeric values for clearance, volume, and half-life are not listed in the provided abstract text, only variability percentages and qualitative covariate effects. |
| popPK | Xu_2012 | relevant | 10 | 0 | The paper describes population PK modeling for tapentadol in humans, but no numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| PGx | Yoshioka_2017 | not_relevant | 0 | 0 | The paper is a clinical case report focusing on drug-drug interactions (warfarin, methadone, oxycodone) and does not report any pharmacogenomic effects on tapentadol PK/PD. |
| popPK | Zhang_2017 | relevant | 10 | 0 | The evidence contains a NONMEM code for a tapentadol population PK model with initial theta estimates and IIV values, but no final estimated parameter values are provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:41 UTC</sub>
