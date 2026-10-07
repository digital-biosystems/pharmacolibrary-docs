<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;darunavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Darunavir_Abdalla2024_reference&quot;,&quot;label&quot;:&quot;Abdalla_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Abdalla2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Darunavir_Stillemans2021_reference&quot;,&quot;label&quot;:&quot;Stillemans_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Stillemans2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# darunavir

- **generic name:** darunavir
- **ATC codes:** `J05AE10`, `J05AR14`, `J05AR22`, `J05AR26`
- **DrugBank:** [DB01264](https://go.drugbank.com/drugs/DB01264) · **PubChem:** [CID 213039](https://pubchem.ncbi.nlm.nih.gov/compound/213039)
- **molar mass:** 547.664 g/mol (C27H37N3O7S) — DrugBank
- **groups:** approved, investigational

## About

Darunavir is an antiviral protease inhibitor used to treat HIV infection. It is authorised in the European Union and is included on the WHO list of essential medicines, so it is widely used in HIV treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3765251](https://www.wikidata.org/wiki/Q3765251) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| darunavir | parent | 547.664 | C27H37N3O7S | DrugBank | [213039](https://pubchem.ncbi.nlm.nih.gov/compound/213039) | Abdalla_2024, Stillemans_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:06 | 3:08 | 2/0/0 | 0/0/0 | 0/0/0 | 250,374/12,438 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdalla_2024_reference](drugs/drug_darunavir/Darunavir_Abdalla2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+1 cov.) | Abdalla S et al., Simultaneous pharmacokinetic modeling o…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01004-23](https://doi.org/10.1128/aac.01004-23) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Stillemans_2021_reference](drugs/drug_darunavir/Darunavir_Stillemans2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) | Stillemans G et al., Exploration of Reduced Doses and Short-…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00920-z](https://doi.org/10.1007/s40262-020-00920-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=darunavir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 92 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boffito_2008.pdf` | Boffito M et al., Pharmacokinetics, efficacy, and safety…, HIV clinical trials (2008) | popPK | 5 | [10.1310/hct0906-418](https://doi.org/10.1310/hct0906-418) | [19203907](https://pubmed.ncbi.nlm.nih.gov/19203907) | The text describes a population pharmacokinetic substudy and mentions a half-life (15 hours), but it lacks the specific quantitative parameter values (CL, V, Q, etc.) required for extraction, which are likely in the main body or figures not provided in the evidence. |
| `Moltó_2018.pdf` | Moltó J et al., Pharmacokinetics of darunavir/cobicista…, The Journal of antimicrobia… (2018) | popPK | 5 | [10.1093/jac/dkx459](https://doi.org/10.1093/jac/dkx459) | [29237008](https://pubmed.ncbi.nlm.nih.gov/29237008) | The study reports non-compartmental parameters (AUC, Cmax, C24) for a drug interaction study, but lacks compartmental PK parameters (CL, V, Q) and does not provide readable numeric values in the evidence provided. |

<sub>queue written 2026-10-07T13:04:12.895355+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dolutegravir, with darunavir only mentioned as a co-administered comparator agent. |
| popPK | Barceló_2016 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of elvitegravir and cobicistat, with darunavir mentioned only as a comparator in drug-drug interaction effects on cobicistat clearance, not as the subject drug. |
| popPK | Boffito_2008 | relevant | 5 | 1 | The text describes a population pharmacokinetic substudy and mentions a half-life (15 hours), but it lacks the specific quantitative parameter values (CL, V, Q, etc.) required for extraction, which are likely in the main body or figures not provided in the evidence. |
| popPK | Daskapan_2019 | relevant | 10 | 2 | The study reports a population PK model for darunavir, but the specific numeric parameter values are in Table 2 (not provided) and Supplemental Digital Content, leaving only non-PK metrics like AIC and r2 in the text. |
| popPK | De_2020 | irrelevant | 0 | 0 | The study is an in vitro virology and molecular docking investigation assessing antiviral activity against SARS-CoV-2, reporting no pharmacokinetic parameters. |
| popPK | García_2008 | irrelevant | 0 | 0 | The paper describes virological resistance profiles and mutation patterns, not pharmacokinetic parameters. |
| popPK | Hijazi_2020 | irrelevant | 2 | 0 | The study focuses on drug transporter expression modulation in macaques and reports only qualitative comparisons to EC50 values or concentrations without specific quantitative pharmacokinetic parameters (CL, V, Ka). |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a review of HIV reverse transcriptase inhibitors (NRTIs/NNRTIs) and does not report quantitative pharmacokinetic parameters for darunavir (a protease inhibitor), which is only mentioned as a background drug class. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | The study reports in vitro enzymatic inhibition and binding kinetics (IC50, KD) of darunavir derivatives against SARS-CoV-2 protease, not pharmacokinetic disposition parameters. |
| popPK | Midde_2017 | irrelevant | 1 | 0 | The study is in-vitro (microsomes and cells) and mechanistic, reporting qualitative trends or relative changes rather than quantitative population-PK parameters (CL, V, ka) for darunavir in a subject species. |
| popPK | Moltó_2018 | irrelevant | 5 | 0 | The study reports non-compartmental parameters (AUC, Cmax, C24) for a drug interaction study, but lacks compartmental PK parameters (CL, V, Q) and does not provide readable numeric values in the evidence provided. |
| popPK | Zhang_2024 | irrelevant | 1 | 1 | The study focuses on the pharmacokinetics of GSK3640254, with darunavir acting only as a co-administered drug in a drug-drug interaction trial without reporting darunavir's own quantitative disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:04 UTC</sub>
