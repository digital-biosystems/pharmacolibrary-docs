<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;abrocitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abrocitinib_Wojciechowski2022_reference&quot;,&quot;label&quot;:&quot;Wojciechowski_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# abrocitinib

- **generic name:** abrocitinib
- **ATC codes:** `D11AH08`
- **DrugBank:** [DB14973](https://go.drugbank.com/drugs/DB14973) · **PubChem:** not captured
- **molar mass:** 323.42 g/mol (C14H21N5O2S) — DrugBank
- **groups:** approved, investigational

## About

Abrocitinib is a protein kinase inhibitor used to treat atopic dermatitis. It is authorised in the European Union as a dermatological medicine for dermatitis and is in approved use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76656815](https://www.wikidata.org/wiki/Q76656815) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| abrocitinib | parent | 323.42 | C14H21N5O2S | DrugBank | — | Wojciechowski_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:45 | 3:30 | 1/0/0 | 2/1/0 | 0/0/0 | 243,422/23,741 | einfracz / qwen3.8-27b | 7 | 0/7 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wojciechowski_2022_reference](drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+5 cov.) | Wojciechowski J et al., Population Pharmacokinetics of Abrociti…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01104-z](https://doi.org/10.1007/s40262-021-01104-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Soto_2020_PLT](drugs/drug_abrocitinib/pd_Soto_2020_PLT.md) | platelet count ← abrocitinib · indirect response — drug inhibits the production of platelet count | — | Soto E et al., Kinetic-Pharmacodynamic Model of Platel…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12548](https://doi.org/10.1002/psp4.12548) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Wojciechowski_2022_2_CIRC](drugs/drug_abrocitinib/pd_Wojciechowski_2022_2_CIRC.md) | platelet count ← abrocitinib · disease-progression model | model (no simulator) | Wojciechowski J et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2022) | [10.1111/bcp.15334](https://doi.org/10.1111/bcp.15334) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wang_2022_2_HR](drugs/drug_abrocitinib/pd_Wang_2022_2_HR.md) | change from baseline in HR (∆HR) ← abrocitinib · direct linear effect | model (no simulator) | Wang X et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1111](https://doi.org/10.1002/cpdd.1111) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wang_2022_2_QTcF](drugs/drug_abrocitinib/pd_Wang_2022_2_QTcF.md) | change from baseline in Fridericia-corrected QT (∆QTcF) ← abrocitinib · direct linear effect | model (no simulator) | Wang X et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1111](https://doi.org/10.1002/cpdd.1111) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=abrocitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: JAK1 (inhibitor), JAK2 (inhibitor), JAK3 (inhibitor), TYK2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fostvedt_2024.pdf` | Fostvedt L et al., Meta-Analysis of Noncompartmental Pharm…, Clinical pharmacology in dr… (2024) | popPK | 8 | [10.1002/cpdd.1465](https://doi.org/10.1002/cpdd.1465) | [39212958](https://pubmed.ncbi.nlm.nih.gov/39212958) | The study is a meta-analysis of human clinical data reporting specific quantitative estimates (percentage changes in AUC) for abrocitinib's active moiety based on genetic polymorphisms. |

<sub>queue written 2026-10-07T07:42:52.143301+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fostvedt_2024 | relevant | 8 | 3 | The study is a meta-analysis of human clinical data reporting specific quantitative estimates (percentage changes in AUC) for abrocitinib's active moiety based on genetic polymorphisms. |
| popPK | Schlösser_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study regarding dose reduction in atopic dermatitis, not a pharmacokinetic study, and contains no quantitative disposition parameters (CL, V, ka, etc.). |
| popPK | Soto_2020 | irrelevant | 2 | 1 | This is a Kinetic-Pharmacodynamic (K-PD) model of platelet counts, not a pharmacokinetic (PK) study; it explicitly states that no abrocitinib concentration data were available and does not report PK parameters like clearance or volume. |
| popPK | Tachet_2025_2 | irrelevant | 2 | 0 | This is a study protocol for a prospective observational trial, and while it plans to characterize PK, it does not report any final quantitative pharmacokinetic parameter values (CL, V, etc.) for abrocitinib. |
| popPK | Wang_2022_2 | irrelevant | 2 | 0 | The paper is a pharmacodynamic study focusing on QTc interval prolongation (concentration-response), not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for abrocitinib. |
| popPK | Wojciechowski_2022_2 | irrelevant | 2 | 0 | This is a PK-PD model of platelet counts (pharmacodynamics), not a study reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for abrocitinib itself; PK values are cited from a previous separate study (ref 8). |
| popPK | Wojciechowski_2022_3 | irrelevant | 0 | 0 | The provided evidence is a correction notice regarding the licensing and copyright of the original article, containing no pharmacokinetic data, model parameters, or numeric values for abrocitinib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:43 UTC</sub>
