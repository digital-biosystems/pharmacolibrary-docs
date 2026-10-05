<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;lansoprazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lansoprazole_Wu2019_reference&quot;,&quot;label&quot;:&quot;Wu_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lansoprazole/Lansoprazole_Wu2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lansoprazole

- **generic name:** lansoprazole
- **ATC codes:** `A02BC03`
- **DrugBank:** [DB00448](https://go.drugbank.com/drugs/DB00448) · **PubChem:** [CID 3883](https://pubchem.ncbi.nlm.nih.gov/compound/3883)
- **molar mass:** 369.361 g/mol (C16H14F3N3O2S) — DrugBank
- **groups:** approved, investigational

## About

Lansoprazole is a proton-pump inhibitor used to treat acid-related conditions such as peptic ulcer disease, gastroesophageal reflux disease, gastritis, and Zollinger–Ellison syndrome. It is an approved prescription medicine, widely used for these disorders, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q254296](https://www.wikidata.org/wiki/Q254296) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lansoprazole | parent | 369.361 | C16H14F3N3O2S | DrugBank | [3883](https://pubchem.ncbi.nlm.nih.gov/compound/3883) | Katashima_1995, Sakurai_2007 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 09:49 | 11:11 | 1/2/1 | 3/0/0 | 0/0/0 | 197,620/34,453 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 12/1 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span> | [Wu_2019_reference](drugs/drug_lansoprazole/Lansoprazole_Wu2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wu L et al., Pharmacokinetic/Pharmacodynamic Evaluat…, Clinical drug investigation (2019) | [10.1007/s40261-019-00824-2](https://doi.org/10.1007/s40261-019-00824-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Katashima_1995_reference](drugs/drug_lansoprazole/Lansoprazole_Katashima1995_reference.md) | — | 1-compartment (no model) | 2 | Katashima M et al., Comparative pharmacokinetic/pharmacodyn…, Drug metabolism and disposi… (1995) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Sakurai_2007_1_compartment](drugs/drug_lansoprazole/Lansoprazole_Sakurai2007_1_compartment.md) | — | 1-compartment (no model) | 4 | Sakurai Y et al., Population pharmacokinetics and proton…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.2238](https://doi.org/10.1248/bpb.30.2238) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Sakurai_2007_2_compartment](drugs/drug_lansoprazole/Lansoprazole_Sakurai2007_2_compartment.md) | — | 1-compartment (no model) | 4 | Sakurai Y et al., Population pharmacokinetics and proton…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.2238](https://doi.org/10.1248/bpb.30.2238) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Katashima_1995_gastric_acid_secretion](drugs/drug_lansoprazole/pd_Katashima_1995_gastric_acid_secretion.md) | gastric acid secretion ← lansoprazole · target-mediated drug disposition | — | Katashima M et al., Comparative pharmacokinetic/pharmacodyn…, Drug metabolism and disposi… (1995) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Katashima_1998_inhibitory_effects_on_gastric_acid_secretion](drugs/drug_lansoprazole/pd_Katashima_1998_inhibitory_effects_on_gastric_acid_secretion.md) | inhibitory effects on gastric acid secretion ← lansoprazole · target-mediated drug disposition | — | Katashima M et al., Comparative pharmacokinetic/pharmacodyn…, European journal of drug me… (1998) | [10.1007/BF03189822](https://doi.org/10.1007/BF03189822) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Puchalski_2001_gastric_pH](drugs/drug_lansoprazole/pd_Puchalski_2001_gastric_pH.md) | gastric pH ← lansoprazole · target-mediated drug disposition | — | Puchalski TA et al., Pharmacodynamic modeling of lansoprazol…, Journal of clinical pharmac… (2001) | [10.1177/00912700122010069](https://doi.org/10.1177/00912700122010069) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lansoprazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | liver | `SLC22A3` unknown | DrugBank actor |
| distribution | placenta | `SLC22A3` unknown | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP2C8` substrate, `CYP2C9` inducer/inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `SLC22A1` unknown | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer, `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` unknown, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP4A (inhibitor), CYP2C18 (substrate), MAPT (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 19 returned
- **screened:** 15  ·  **relevant:** 6
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Helfer_2025.pdf` | Helfer VE et al., Exploring the Influence of Obesity and…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01517-0](https://doi.org/10.1007/s40262-025-01517-0) | [40379961](https://pubmed.ncbi.nlm.nih.gov/40379961) | The paper describes a population PK model for lansoprazole in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Hu_2004.pdf` | Hu YR et al., Pharmacokinetics of lansoprazole in Chi…, Acta pharmacologica Sinica (2004) | popPK | 10 | not captured | [15301728](https://pubmed.ncbi.nlm.nih.gov/15301728) | The study reports quantitative pharmacokinetic parameters (Cl/F, T1/2, Cmax, AUC) for lansoprazole in human subjects, with values explicitly listed in the abstract. |
| `Katashima_1995.pdf` | Katashima M et al., Comparative pharmacokinetic/pharmacodyn…, Drug metabolism and disposi… (1995) | popPK | 10 | not captured | [7587960](https://pubmed.ncbi.nlm.nih.gov/7587960) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution) for lansoprazole in rats. |
| `Tran_2002.pdf` | Tran A et al., Pharmacokinetic-pharmacodynamic study o…, Clinical pharmacology and t… (2002) | popPK | 10 | [10.1067/mcp.2002.122472](https://doi.org/10.1067/mcp.2002.122472) | [12011821](https://pubmed.ncbi.nlm.nih.gov/12011821) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for lansoprazole in children with values explicitly listed in the abstract. |
| `Zalloum_2012.pdf` | Zalloum I et al., Genetic polymorphism of CYP2C19 in a Jo…, Molecular biology reports (2012) | popPK | 9 | [10.1007/s11033-011-1204-5](https://doi.org/10.1007/s11033-011-1204-5) | [21769476](https://pubmed.ncbi.nlm.nih.gov/21769476) | The study reports quantitative non-compartmental pharmacokinetic parameters (Tmax, Cmax, t1/2, AUC) for lansoprazole in humans, with values explicitly listed in the abstract. |
| `Alai_2014.pdf` | Alai M et al., Novel lansoprazole-loaded nanoparticles…, The AAPS journal (2014) | popPK | 8 | [10.1208/s12248-014-9564-0](https://doi.org/10.1208/s12248-014-9564-0) | [24519468](https://pubmed.ncbi.nlm.nih.gov/24519468) | The study reports in vivo pharmacokinetic evaluation of lansoprazole in rats, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Wang_2026.pdf` | Wang Y et al., Effect of High-Fat Meal on the Pharmaco…, Clinical pharmacology in dr… (2026) | popPK | 8 | [10.1002/cpdd.70069](https://doi.org/10.1002/cpdd.70069) | [42237926](https://pubmed.ncbi.nlm.nih.gov/42237926) | The study reports quantitative PK parameters (Cmax, AUC) for lansoprazole in humans, but specific numeric values for clearance, volume, or half-life are not provided in the text, only percentage changes. |
| `Thota_2013.pdf` | Thota S et al., Bioequivalence of two lansoprazole dela…, Drug research (2013) | popPK | 6 | [10.1055/s-0033-1347236](https://doi.org/10.1055/s-0033-1347236) | [23780504](https://pubmed.ncbi.nlm.nih.gov/23780504) | The study reports pharmacokinetic parameters (Kel, T1/2) for lansoprazole in humans, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-04T09:39:10.375166+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alai_2014 | relevant | 8 | 0 | The study reports in vivo pharmacokinetic evaluation of lansoprazole in rats, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Alai_2014 | not_relevant | 2 | 1 | The paper reports PK data (sustained concentration) and a qualitative/percentage-based efficacy outcome (ulcer healing rate) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Echizen_2016_2 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of vonoprazan, with lansoprazole serving only as a comparator for potency and acid suppression. |
| popPK | Helfer_2025 | relevant | 10 | 0 | The paper describes a population PK model for lansoprazole in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Katashima_1998 | irrelevant | 2 | 0 | The study reports PK/PD parameters (reaction rate constants, turnover rates) for acid inhibition rather than standard disposition parameters (CL, V, ka) for lansoprazole. |
| popPK | Kirchheiner_2009_2 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of gastric pH effects and does not report pharmacokinetic parameters (CL, V, ka) for lansoprazole. |
| popPK | Litalien_2005 | irrelevant | 2 | 0 | This is a review article that summarizes general pharmacokinetic characteristics (e.g., half-life ~1 hour) without providing specific quantitative parameter values (CL, V, ka) for lansoprazole. |
| popPK | Liu_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2C9 enzyme activation by lansoprazole enantiomers, not a pharmacokinetic study reporting disposition parameters for lansoprazole. |
| popPK | Menzel_2005 | irrelevant | 0 | 0 | The study investigates CYP gene expression and toxicity in C. elegans using lansoprazole as a xenobiotic inducer, not its pharmacokinetic disposition parameters. |
| popPK | Ollier_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dabigatran, with lansoprazole serving only as a co-administered proton pump inhibitor in a drug-drug interaction assessment. |
| popPK | Prinz_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gastrin effects on rat ECL cells, where lansoprazole is used only as a negative control and no pharmacokinetic parameters are reported. |
| PD | Prinz_1994 | not_relevant | 0 | 0 | The paper reports that lansoprazole did not affect BrdU incorporation in isolated ECL cells, providing no numeric PD parameters or exposure-response relationship for the drug. |
| popPK | Puchalski_2001 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling of gastric pH and reports PD parameters (enzyme inactivation, food removal), but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) for lansoprazole. |
| popPK | Thota_2013 | relevant | 6 | 0 | The study reports pharmacokinetic parameters (Kel, T1/2) for lansoprazole in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Wang_2026 | relevant | 8 | 2 | The study reports quantitative PK parameters (Cmax, AUC) for lansoprazole in humans, but specific numeric values for clearance, volume, or half-life are not provided in the text, only percentage changes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 09:39 UTC</sub>
