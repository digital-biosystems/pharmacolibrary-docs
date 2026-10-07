<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;butorphanol&quot;}]"></div>

# butorphanol

- **generic name:** butorphanol
- **ATC codes:** `N02AF01`
- **DrugBank:** [DB00611](https://go.drugbank.com/drugs/DB00611) · **PubChem:** [CID 6916249](https://pubchem.ncbi.nlm.nih.gov/compound/6916249)
- **molar mass:** 327.4605 g/mol (C21H29NO2) — DrugBank
- **groups:** approved, illicit, investigational, vet_approved

## About

Butorphanol is an opioid painkiller used to treat pain, including migraine, and can also act as a cough suppressant. It is an approved medicine in human and veterinary use, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1185089](https://www.wikidata.org/wiki/Q1185089) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| butorphanol | parent | 327.461 | C21H29NO2 | DrugBank | [6916249](https://pubchem.ncbi.nlm.nih.gov/compound/6916249) | Knych_2024, Saeed_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:55 | 1:59 | 0/5/0 | 1/0/0 | 0/0/1 | 191,593/11,212 | einfracz / qwen3.8-27b | 9 | 4/5 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Groenendaal_2008_reference](drugs/drug_butorphanol/Butorphanol_Groenendaal2008_reference.md) | — | 1-compartment (no model) | 0 | Groenendaal D et al., Pharmacokinetic/pharmacodynamic modelli…, European journal of pharmac… (2008) | [10.1016/j.ejps.2008.03.003](https://doi.org/10.1016/j.ejps.2008.03.003) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Knych_2024_estimate](drugs/drug_butorphanol/Butorphanol_Knych2024_reference.md) | — | 2-compartment (no model) | 6 | Knych HK et al., Population pharmacokinetics of butorpha…, Journal of veterinary pharm… (2024) | [10.1111/jvp.13450](https://doi.org/10.1111/jvp.13450) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Knych_2024_shrinkage](drugs/drug_butorphanol/Butorphanol_Knych2024_reference.md) | — | 2-compartment (no model) | 6 | Knych HK et al., Population pharmacokinetics of butorpha…, Journal of veterinary pharm… (2024) | [10.1111/jvp.13450](https://doi.org/10.1111/jvp.13450) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Pypendop_2021_reference](drugs/drug_butorphanol/Butorphanol_Pypendop2021_reference.md) | — | 1-compartment (no model) | 0 | Pypendop BH et al., Pharmacokinetics of butorphanol in male…, Journal of veterinary pharm… (2021) | [10.1111/jvp.13014](https://doi.org/10.1111/jvp.13014) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Saeed_2026_reference](drugs/drug_butorphanol/Butorphanol_Saeed2026_reference.md) | — | 1-compartment (no model) | 3 (+1 cov.) | Saeed AM et al., Butorphanol Pharmacokinetics Across Spe…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70293](https://doi.org/10.1002/psp4.70293) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Vandeputte_2020_arr2](drugs/drug_butorphanol/pd_Vandeputte_2020_arr2.md) | β-arrestin 2 (βarr2) recruitment ← butorphanol · direct Emax (saturable) effect | — | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Vandeputte_2020_mini_Gi](drugs/drug_butorphanol/pd_Vandeputte_2020_mini_Gi.md) | mini-Gi (G protein) recruitment ← butorphanol · direct Emax (saturable) effect | — | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Nelson_2025](drugs/drug_butorphanol/pgx_Nelson_2025_ABCB1_Q100.md) | Nelson TS et al., Case Report: Adverse reaction to butorp…, Frontiers in veterinary sci… (2025) | [10.3389/fvets.2025.1603375](https://doi.org/10.3389/fvets.2025.1603375) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=butorphanol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 25 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 5  ·  extracted 0  ·  needs_review 0  ·  rejected 5  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Portnoy_1992.pdf` | Portnoy LG et al., Pharmacokinetics of butorphanol tartrat…, American journal of veterin… (1992) | popPK | 10 | not captured | [1586025](https://pubmed.ncbi.nlm.nih.gov/1586025) | The study reports quantitative pharmacokinetic parameters (half-life) for butorphanol in rabbits. |
| `Riggs_2008.pdf` | Riggs SM et al., Pharmacokinetics of butorphanol tartrat…, American journal of veterin… (2008) | popPK | 10 | [10.2460/ajvr.69.5.596](https://doi.org/10.2460/ajvr.69.5.596) | [18447789](https://pubmed.ncbi.nlm.nih.gov/18447789) | The study reports quantitative pharmacokinetic parameters (half-life, bioavailability, model types) for butorphanol in birds, with values present in the abstract. |
| `Singh_2011.pdf` | Singh PM et al., Pharmacokinetics of butorphanol in broi…, The Veterinary record (2011) | popPK | 10 | [10.1136/vr.d1191](https://doi.org/10.1136/vr.d1191) | [21628341](https://pubmed.ncbi.nlm.nih.gov/21628341) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life, rate constants) for butorphanol in broiler chickens with all numeric values present in the abstract. |
| `Groenendaal_2008.pdf` | Groenendaal D et al., Pharmacokinetic/pharmacodynamic modelli…, European journal of pharmac… (2008) | popPK | 5 | [10.1016/j.ejps.2008.03.003](https://doi.org/10.1016/j.ejps.2008.03.003) | [18467078](https://pubmed.ncbi.nlm.nih.gov/18467078) | The study reports population PK/PD parameters (biophase distribution rate constants k1e and keo) for butorphanol, though it focuses on the PD effect (EEG) rather than traditional disposition parameters like CL or V. |

<sub>queue written 2026-10-07T04:53:37.755192+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anderson_2011 | not_relevant | 0 | 0 | The paper is a general review of pharmacokinetics and pharmacodynamics of systemic opioids and does not report pharmacogenomic effects or gene variant-specific changes in PK/PD parameters. |
| popPK | Basler_2026 | irrelevant | 0 | 0 | The study evaluates ventilation distribution using electrical impedance tomography in alpacas; butorphanol is used only as a sedative agent, and no pharmacokinetic parameters (e.g., clearance, volume, half-life) for butorphanol are reported. |
| popPK | Best_2024 | irrelevant | 0 | 0 | The study evaluates sedation scores and butorphanol is a co-administered sedative, not the subject of a pharmacokinetic analysis. |
| PGx | Cook_2000 | not_relevant | 0 | 0 | The paper investigates sex differences in opioid sensitivity, not the effect of a specific gene variant/genotype on the pharmacokinetics or pharmacodynamics of butorphanol. |
| popPK | Emmerson_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of opioid receptor binding and G-protein activation in C6 glioma cells, reporting binding affinities and functional EC50s rather than pharmacokinetic disposition parameters for butorphanol. |
| popPK | Gittel_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of l-methadone, with butorphanol used only as a sedative agent for induction and not as the subject of PK analysis. |
| popPK | Grechko_2017 | irrelevant | 0 | 0 | The study assesses pharmacodynamic effects (respiratory depression, GI transit) rather than pharmacokinetic parameters (CL, Vd, half-life). |
| popPK | Groenendaal_2005 | irrelevant | 1 | 0 | The paper describes the development of an analytical method for quantifying butorphanol but does not report any pharmacokinetic parameters. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy and safety of propofol combined with butorphanol for sedation, focusing on propofol's EC50 and adverse events, without reporting any pharmacokinetic parameters (e.g., clearance, volume, half-life) for butorphanol. |
| popPK | Manneveau_2018 | irrelevant | 0 | 0 | This is a study on the physiological effects of sedation protocols on the pharynx and larynx in horses, containing no pharmacokinetic parameters for butorphanol. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The study measures the median effective concentration (EC50) of ropivacaine for nerve block, not pharmacokinetic parameters (clearance, volume, half-life) of butorphanol. |
| PGx | Terner_2003 | not_relevant | 1 | 0 | The study examines sex and rat strain differences in antinociception (a functional behavioral PD endpoint) rather than a specific gene variant altering the PK or PD of butorphanol. |
| popPK | Vandeputte_2020 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study reporting receptor potency (EC50) and efficacy, not pharmacokinetic disposition parameters. |
| popPK | VonVoigtlander_1983 | irrelevant | 0 | 0 | The study investigates pharmacodynamic physical dependence (withdrawal hyperalgesia) in mice and does not report any pharmacokinetic parameters for butorphanol. |
| PGx | Wen_2015 | not_relevant | 0 | 0 | The paper investigates the interaction between butorphanol and the ABCB1 transporter in leukemia cells to reverse multidrug resistance, but it does not report any pharmacogenomic effects (gene variants changing PK/PD) for butorphanol itself. |
| popPK | Yabaluri_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor down-regulation and G-protein coupling, reporting no pharmacokinetic disposition parameters (CL, V, t1/2) for butorphanol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:53 UTC</sub>
