<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;papaverine&quot;}]"></div>

# papaverine

- **generic name:** papaverine
- **ATC codes:** `A03AD01`, `G04BE02`
- **DrugBank:** [DB01113](https://go.drugbank.com/drugs/DB01113) · **PubChem:** [CID 4680](https://pubchem.ncbi.nlm.nih.gov/compound/4680)
- **molar mass:** 339.385 g/mol (C20H21NO4) — DrugBank
- **groups:** approved, investigational

## About

Papaverine is a vasodilator used for conditions such as erectile dysfunction, colic, and various vascular disorders including Raynaud disease and peripheral vascular disease. It is an approved medicine, used for functional gastrointestinal disorders and erectile dysfunction, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410374](https://www.wikidata.org/wiki/Q410374) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| papaverine | parent | 339.385 | C20H21NO4 | DrugBank | [4680](https://pubchem.ncbi.nlm.nih.gov/compound/4680) | Ritschel_1977 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:56 | 6:01 | 0/0/1 | 2/0/0 | 0/0/0 | 119,808/13,519 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Ritschel_1977_reference](drugs/drug_papaverine/Papaverine_Ritschel1977_reference.md) | — | 1-compartment (no model) | 1 | Ritschel WA et al., Pharmacokinetics of papaverine in man, International journal of cl… (1977) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Rahimi_2011_relaxatory_response](drugs/drug_papaverine/pd_Rahimi_2011_relaxatory_response.md) | relaxatory response ← papaverine · direct Emax (saturable) effect | — | Rahimi N et al., Effect of DETA-NONOate and papaverine o…, Canadian journal of physiol… (2011) | [10.1139/y11-092](https://doi.org/10.1139/y11-092) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Rehman_2022_2_CCh_induced_contractions](drugs/drug_papaverine/pd_Rehman_2022_2_CCh_induced_contractions.md) | carbachol (CCh; 1 µM)-induced contractions in isolated rat ileum preparations ← papaverine · direct sigmoid Emax (Hill) effect | — | Rehman NU et al., Dual Inhibition of Phosphodiesterase an…, Plants (Basel, Switzerland) (2022) | [10.3390/plants11091183](https://doi.org/10.3390/plants11091183) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Rehman_2022_2_high_K_induced_contractions](drugs/drug_papaverine/pd_Rehman_2022_2_high_K_induced_contractions.md) | high K+ (80 mM)-induced contractions in isolated rat ileum preparations ← papaverine · direct sigmoid Emax (Hill) effect | — | Rehman NU et al., Dual Inhibition of Phosphodiesterase an…, Plants (Basel, Switzerland) (2022) | [10.3390/plants11091183](https://doi.org/10.3390/plants11091183) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=papaverine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDE10A (inhibitor), PDE4B (inhibitor), PDE4D (inhibitor), PDE5A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 114 matched, 28 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kraus_1991.pdf` | Kraus C et al., Pharmacokinetics and bioavailability of…, Biopharmaceutics & drug dis… (1991) | popPK | 10 | [10.1002/bdd.2510120707](https://doi.org/10.1002/bdd.2510120707) | [1932615](https://pubmed.ncbi.nlm.nih.gov/1932615) | The study reports a two-compartment PK model for papaverine in dogs, but the specific numeric values for clearance, volume, and half-life are not present in the provided evidence, only bioavailability percentages. |
| `Ritschel_1991.pdf` | Ritschel WA et al., Pharmacokinetics of papaverine HCl upon…, Methods and findings in exp… (1991) | popPK | 10 | not captured | [1870358](https://pubmed.ncbi.nlm.nih.gov/1870358) | The study reports quantitative pharmacokinetic parameters for papaverine in dogs, but the specific numeric values are not present in the provided evidence text. |
| `Shaaya_1992.pdf` | Shaaya AN et al., Pharmacokinetics and bioavailability of…, Methods and findings in exp… (1992) | popPK | 10 | not captured | [1513193](https://pubmed.ncbi.nlm.nih.gov/1513193) | The study reports pharmacokinetic parameters for papaverine in dogs, but the specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only bioavailability percentages. |
| `Juhran_1975.pdf` | Juhran VW et al., [The pharmacokinetics of papaverine and…, Arzneimittel-Forschung (1975) | popPK | 9 | not captured | [1242319](https://pubmed.ncbi.nlm.nih.gov/1242319) | The study reports pharmacokinetic parameters (half-life, volume, absorption rate) for papaverine in beagles, but the specific numeric values are not present in the provided evidence. |
| `Ritschel_1977.pdf` | Ritschel WA et al., Pharmacokinetics of papaverine in man, International journal of cl… (1977) | popPK | 8 | not captured | [873666](https://pubmed.ncbi.nlm.nih.gov/873666) | The paper reports quantitative PK parameters (half-life, volume of distribution) for papaverine in humans, but the values are ranges or approximations rather than precise point estimates from a primary dataset. |
| `Hiraga_2001.pdf` | Hiraga H et al., Nitric oxide donor FK409 and 8-bromogua…, Fundamental & clinical phar… (2001) | pd | 4 | [10.1046/j.1472-8206.2001.00012.x](https://doi.org/10.1046/j.1472-8206.2001.00012.x) | [11468022](https://www.ncbi.nlm.nih.gov/pubmed/11468022) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-04T12:51:27.481969+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Dalpiaz_2018 | not_relevant | 0 | 0 | The paper discusses nasal delivery of antiviral drugs and mentions papaverine only as a general absorption enhancer, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Emami_2020 | irrelevant | 0 | 0 | The study investigates the pharmacological relaxant effect of curcumin on rat tracheal smooth muscle, using papaverine only as a tool compound to test for phosphodiesterase inhibition, and does not report any pharmacokinetic parameters for papaverine. |
| PD | Emami_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of curcumin, not papaverine; papaverine is only used as a tool compound in the experimental protocol. |
| popPK | Fekri_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer effects and does not report pharmacokinetic parameters for papaverine. |
| popPK | Hiraga_2001 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Hiraga_2001 | not_relevant | 0 | 0 | The paper focuses on nitric oxide donor FK409 and 8-bromoguanosine-cyclic monophosphate, not papaverine. |
| popPK | Horgan_1991 | irrelevant | 0 | 0 | Papaverine is used only as a pharmacological antagonist to inhibit vasoconstriction, not as the subject of a pharmacokinetic study. |
| PD | Horgan_1991 | not_relevant | 1 | 0 | The paper reports a dose-response curve for endothelin-1 (ET-1), not papaverine; papaverine is only mentioned as a qualitative inhibitor at a single concentration. |
| PGx | Iwase_2017 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of papaverine on CYP enzymes in vitro, not the effect of genetic variants on papaverine's pharmacokinetics or pharmacodynamics. |
| PGx | Joshi_2001 | not_relevant | 0 | 0 | The study investigates the physiological effects of papaverine on cerebral blood flow and resistance in a small cohort but does not report any pharmacogenomic analysis or gene variant associations. |
| popPK | Juhran_1975 | relevant | 9 | 0 | The study reports pharmacokinetic parameters (half-life, volume, absorption rate) for papaverine in beagles, but the specific numeric values are not present in the provided evidence. |
| PGx | Jägestedt_2004 | not_relevant | 0 | 0 | The paper describes a case of serotonin syndrome due to drug interactions and mentions CYP2D6 involvement, but it does not report a specific pharmacogenomic effect (genotype-phenotype association) on a PK or PD parameter of papaverine. |
| popPK | Khan_2015 | irrelevant | 0 | 0 | The study investigates the bronchodilator activity of Vitex negundo, using papaverine only as a comparator agent in in-vitro and in-vivo pharmacological assays, with no pharmacokinetic parameters reported. |
| PD | Khan_2015 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Vitex negundo, using papaverine only as a qualitative reference standard; it does not report PD parameters for papaverine. |
| popPK | Kraus_1991 | relevant | 10 | 2 | The study reports a two-compartment PK model for papaverine in dogs, but the specific numeric values for clearance, volume, and half-life are not present in the provided evidence, only bioavailability percentages. |
| popPK | Rahimi_2011 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilation in isolated human arteries, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Rehman_2022 | irrelevant | 0 | 0 | The study is an ex vivo pharmacodynamic investigation of fenchone's spasmolytic activity, using papaverine only as a standard comparator drug, and does not report any pharmacokinetic parameters for papaverine. |
| popPK | Rehman_2022_2 | irrelevant | 0 | 0 | Papaverine is used only as a positive control in ex vivo pharmacodynamic assays (EC50 for smooth muscle relaxation), not as the subject of a pharmacokinetic study. |
| popPK | Ritschel_1991 | relevant | 10 | 0 | The study reports quantitative pharmacokinetic parameters for papaverine in dogs, but the specific numeric values are not present in the provided evidence text. |
| PGx | Salminen_2015 | not_relevant | 0 | 0 | The paper investigates the inhibitory potential of papaverine on CYP2C19 in vitro, but does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of papaverine. |
| PGx | Segarra_1999 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of papaverine on human penile vessels in vitro but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Shaaya_1992 | relevant | 10 | 2 | The study reports pharmacokinetic parameters for papaverine in dogs, but the specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only bioavailability percentages. |
| PGx | Shamloul_2005 | not_relevant | 0 | 0 | The paper compares the efficacy of two drugs for erectile dysfunction but does not investigate any gene variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sliwiński_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of galanin on rat gastric muscle, where papaverine is used only as a non-specific antagonist/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Sliwiński_1996 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill coefficient) for galanin and its analogues, but papaverine is only used as a non-competitive antagonist to characterize the mechanism of galanin, with no specific PD model or numeric parameters reported for papaverine itself. |
| PGx | Tarhan_2006 | not_relevant | 0 | 0 | The paper compares the efficacy and side effects of two drug regimens for erectile dysfunction but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Wu_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxymatrine and matrine, using papaverine only as an internal standard for the assay. |
| popPK | Wójcicki_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol, with papaverine acting only as a co-administered agent to test for interactions, not as the subject drug. |
| popPK | dOelsnitz_2022 | irrelevant | 0 | 0 | The paper is a study on the directed evolution of biosensors for alkaloid detection and biosynthesis, not a pharmacokinetic study of papaverine. |
| PD | dOelsnitz_2022 | not_relevant | 0 | 0 | The paper focuses on the evolution of biosensors for alkaloids and reports binding affinities (EC50) for the sensor proteins, not pharmacodynamic exposure-response relationships for the drug papaverine in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 12:51 UTC</sub>
