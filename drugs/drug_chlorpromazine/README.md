<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;chlorpromazine&quot;}]"></div>

# chlorpromazine

- **generic name:** chlorpromazine
- **ATC codes:** `N05AA01`
- **DrugBank:** [DB00477](https://go.drugbank.com/drugs/DB00477) · **PubChem:** [CID 2726](https://pubchem.ncbi.nlm.nih.gov/compound/2726)
- **molar mass:** 318.864 g/mol (C17H19ClN2S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Chlorpromazine is a phenothiazine antipsychotic used mainly for schizophrenia, and also for vomiting, hiccups, anxiety, tetanus and acute intermittent porphyria. It remains widely used, is listed among WHO essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407972](https://www.wikidata.org/wiki/Q407972) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlorpromazine | parent | 318.864 | C17H19ClN2S | DrugBank | [2726](https://pubchem.ncbi.nlm.nih.gov/compound/2726) | Nawaz_1981, Nielsen_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:31 | 1:36 | 0/1/1 | 6/0/0 | 0/0/0 | 91,530/4,691 | ollama / glm-5.3-flash | 5 | 3/2 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Nawaz_1981_reference](drugs/drug_chlorpromazine/Chlorpromazine_Nawaz1981_reference.md) | — | 1-compartment (no model) | 2 | Nawaz M, Pharmacokinetics and dosage of chlorpro…, Journal of veterinary pharm… (1981) | [10.1111/j.1365-2885.1981.tb00725.x](https://doi.org/10.1111/j.1365-2885.1981.tb00725.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Nielsen_1983_reference](drugs/drug_chlorpromazine/Chlorpromazine_Nielsen1983_reference.md) | — | 1-compartment (no model) | 2 | Nielsen HC et al., Chlorpromazine excretion by the neonate…, Pediatric pharmacology (New… (1983) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Galbiati_2017_IL_18_SI2](drugs/drug_chlorpromazine/pd_Galbiati_2017_IL_18_SI2.md) | IL-18 release (sensitization induction, IL-18 SI2) ← chlorpromazine · stimulation effect | — | Galbiati V et al., Development of an in vitro method to es…, Toxicology letters (2017) | [10.1016/j.toxlet.2017.01.016](https://doi.org/10.1016/j.toxlet.2017.01.016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Korth_2001_PrP_Sc](drugs/drug_chlorpromazine/pd_Korth_2001_PrP_Sc.md) | PrP(Sc) formation ← chlorpromazine · inhibition effect | — | Korth C et al., Acridine and phenothiazine derivatives…, Proceedings of the National… (2001) | [10.1073/pnas.161274798](https://doi.org/10.1073/pnas.161274798) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lee_2017_INa](drugs/drug_chlorpromazine/pd_Lee_2017_INa.md) | hNav1.7 peak sodium current ← chlorpromazine · direct sigmoid Emax (Hill) effect | — | Lee SJ et al., Mechanism of inhibition by chlorpromazi…, Neuroscience letters (2017) | [10.1016/j.neulet.2016.12.051](https://doi.org/10.1016/j.neulet.2016.12.051) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Purohit_2023_metric_tensor_g](drugs/drug_chlorpromazine/pd_Purohit_2023_metric_tensor_g.md) | metric tensor component of perceived visual space (spatial distortion threshold-derived) ← chlorpromazine · direct sigmoid Emax (Hill) effect | — | Purohit P et al., Empirically validated theoretical analy…, Frontiers in computational… (2023) | [10.3389/fncom.2023.1136985](https://doi.org/10.3389/fncom.2023.1136985) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Santone_1989_GSH_depletion](drugs/drug_chlorpromazine/pd_Santone_1989_GSH_depletion.md) | intracellular glutathione depletion ← chlorpromazine · inhibition effect | — | Santone KS et al., Studies of chemical toxicity to fresh a…, Toxicology and applied phar… (1989) | [10.1016/0041-008x(89)90341-4](https://doi.org/10.1016/0041-008x(89)90341-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Santone_1989_LDH_release](drugs/drug_chlorpromazine/pd_Santone_1989_LDH_release.md) | lactate dehydrogenase release ← chlorpromazine · inhibition effect | — | Santone KS et al., Studies of chemical toxicity to fresh a…, Toxicology and applied phar… (1989) | [10.1016/0041-008x(89)90341-4](https://doi.org/10.1016/0041-008x(89)90341-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thomas_2003_HERG_block](drugs/drug_chlorpromazine/pd_Thomas_2003_HERG_block.md) | HERG potassium channel block ← chlorpromazine · direct sigmoid Emax (Hill) effect | — | Thomas D et al., The antipsychotic drug chlorpromazine i…, British journal of pharmaco… (2003) | [10.1038/sj.bjp.0705283](https://doi.org/10.1038/sj.bjp.0705283) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlorpromazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` unknown, `ORM1` binder | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `BCHE` inhibitor, `CYP1A2` substrate, `CYP2D6` inhibitor/substrate, `CYP2E1` inhibitor, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA2A (target), CALM1 (inhibitor), CHRM1 (target), CHRM3 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (inhibitor), HRH1 (target), HRH4 (binder), HTR1A (target), HTR2A (binder), HTR2A (target), HTR2C (target), HTR6 (target), HTR7 (target), KCNH2 (inhibitor), SMPD1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nawaz_1981.pdf` | Nawaz M, Pharmacokinetics and dosage of chlorpro…, Journal of veterinary pharm… (1981) | popPK | 10 | [10.1111/j.1365-2885.1981.tb00725.x](https://doi.org/10.1111/j.1365-2885.1981.tb00725.x) | [7349328](https://pubmed.ncbi.nlm.nih.gov/7349328) | Original goat PK study with numeric CL (80±25 ml/min/kg), half-life (1.51±0.48 h), and two-compartment model parameters reported directly in the abstract. |
| `Chetty_1994.pdf` | Chetty M et al., Smoking and body weight influence the c…, European journal of clinica… (1994) | popPK | 8 | [10.1007/BF00196109](https://doi.org/10.1007/BF00196109) | [7995319](https://pubmed.ncbi.nlm.nih.gov/7995319) | Population PK (NONMEM) of chlorpromazine in 31 patients, but no numeric parameter values appear in the evidence provided. |
| `Nielsen_1983.pdf` | Nielsen HC et al., Chlorpromazine excretion by the neonate…, Pediatric pharmacology (New… (1983) | popPK | 6 | not captured | [6646875](https://pubmed.ncbi.nlm.nih.gov/6646875) | Single-case newborn PK with two-compartment half-lives reported, but no CL/V values and only one infant. |

<sub>queue written 2026-10-06T15:31:02.782781+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chetty_1994 | relevant | 8 | 3 | Population PK (NONMEM) of chlorpromazine in 31 patients, but no numeric parameter values appear in the evidence provided. |
| popPK | Chetty_2001 | irrelevant | 3 | 1 | A case report of a drug interaction within a population PK study, but no quantitative disposition parameters (CL, V, half-life) for chlorpromazine are reported. |
| popPK | Conus_2015 | irrelevant | 0 | 0 | This is a clinical efficacy/safety trial with no pharmacokinetic parameters reported for chlorpromazine. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | In vitro skin sensitization assay; chlorpromazine is only a test chemical, no PK parameters. |
| popPK | Haider_2023 | irrelevant | 0 | 0 | Chlorpromazine appears only as an equivalent-dose unit for antipsychotic prescribing outcomes; no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Hatanaka_1988 | irrelevant | 0 | 0 | The evidence contains no readable text or numeric parameters, only a GROBID processing header, so nothing can be assessed. |
| popPK | Korth_2001 | irrelevant | 0 | 0 | In-vitro antiprion efficacy study (EC50 only), no pharmacokinetic disposition parameters for chlorpromazine. |
| popPK | Lee_2017 | irrelevant | 0 | 0 | In-vitro electrophysiology (patch-clamp IC50) with no PK disposition parameters for chlorpromazine. |
| popPK | Mori_2026 | irrelevant | 0 | 0 | Chlorpromazine appears only as a chlorpromazine-equivalent dose metric in an outcomes study; no PK parameters are reported. |
| popPK | Purohit_2023 | irrelevant | 1 | 1 | This is a computational model of visual-spatial perception; chlorpromazine is only a hypoactivation-inducing agent, with no PK disposition parameters (CL, V, half-life) reported for it. |
| popPK | Santone_1989 | irrelevant | 0 | 0 | In-vitro hepatocyte toxicity study with EC50 values, not a PK disposition study of chlorpromazine. |
| popPK | Sato_1995 | irrelevant | 0 | 0 | The evidence contains no usable text or numeric PK data for chlorpromazine; only a GROBID processing header is present. |
| popPK | Sato_1995_2 | irrelevant | 0 | 0 | The extracted text contains only GROBID boilerplate with no paper content, so no PK parameters for chlorpromazine are present. |
| popPK | Schoedel_2018 | irrelevant | 0 | 0 | This is a human abuse-potential study of brivaracetam; chlorpromazine appears only as part of the PCAG scale name, with no PK parameters reported. |
| popPK | Thomas_2003 | irrelevant | 0 | 0 | In-vitro electrophysiology (HERG channel block in Xenopus oocytes), no PK disposition parameters for chlorpromazine. |
| popPK | Yahata_2020 | irrelevant | 2 | 0 | Chlorpromazine is only mentioned as an excluded compound (Vdss &lt; V1 deviation); no numeric PK parameters for it are reported, and the study concerns other compounds. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | In vitro receptor pharmacology study with no PK parameters for chlorpromazine. |
| popPK | de_2016 | irrelevant | 0 | 0 | Ecotoxicity study in Daphnia magna reporting EC50 values, not pharmacokinetic disposition parameters for chlorpromazine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:31 UTC</sub>
