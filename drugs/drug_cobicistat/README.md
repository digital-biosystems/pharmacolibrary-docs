<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cobicistat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cobicistat_Barcel2016_reference&quot;,&quot;label&quot;:&quot;Barcel\u00f3_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobicistat/Cobicistat_Barcel2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cobicistat

- **generic name:** cobicistat
- **ATC codes:** `J05AR09`, `J05AR14`, `J05AR15`, `J05AR18`, `J05AR22`, `V03AX03`
- **DrugBank:** [DB09065](https://go.drugbank.com/drugs/DB09065) · **PubChem:** [CID 25151504](https://pubchem.ncbi.nlm.nih.gov/compound/25151504)
- **molar mass:** 776.03 g/mol (C40H53N7O5S2) — DrugBank
- **groups:** approved, investigational

## About

Cobicistat is an anti-HIV medicine used in the treatment of HIV infection, where it acts as a booster that inhibits the CYP3A enzyme to raise levels of other antiviral drugs. It is authorised in the European Union and is used in combination antiviral products for HIV.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5138908](https://www.wikidata.org/wiki/Q5138908) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cobicistat | parent | 776.03 | C40H53N7O5S2 | DrugBank | [25151504](https://pubchem.ncbi.nlm.nih.gov/compound/25151504) | Barceló_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:55 | 7:39 | 1/0/0 | 0/0/0 | 0/0/0 | 295,377/29,153 | einfracz / qwen3.8-27b | 10 | 1/9 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Barceló_2016_reference](drugs/drug_cobicistat/Cobicistat_Barcel2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Barceló C et al., Population pharmacokinetic analysis of…, The Journal of antimicrobia… (2016) | [10.1093/jac/dkw050](https://doi.org/10.1093/jac/dkw050) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cobicistat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barceló_2016.pdf` | Barceló C et al., Population pharmacokinetic analysis of…, The Journal of antimicrobia… (2016) | popPK | 10 | [10.1093/jac/dkw050](https://doi.org/10.1093/jac/dkw050) | [27029846](https://pubmed.ncbi.nlm.nih.gov/27029846) | The abstract explicitly reports the population pharmacokinetic parameters (clearance and volume of distribution) for cobicistat in HIV-infected individuals. |
| `Moltó_2018.pdf` | Moltó J et al., Pharmacokinetics of darunavir/cobicista…, The Journal of antimicrobia… (2018) | popPK | 8 | [10.1093/jac/dkx459](https://doi.org/10.1093/jac/dkx459) | [29237008](https://pubmed.ncbi.nlm.nih.gov/29237008) | The study reports pharmacokinetic data for cobicistat in humans, but the abstract provides only percentage changes in exposure (AUC, Cmax, C24) rather than absolute numeric parameter values like clearance or volume. |

<sub>queue written 2026-10-07T12:49:18.558926+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of darunavir and ritonavir in adolescents; cobicistat is only mentioned as a potential booster in the background but is not the subject of the PK analysis nor are any cobicistat parameters reported. |
| popPK | Brooks_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of darunavir, with cobicistat serving only as a booster/co-administered agent, and no quantitative PK parameters for cobicistat are reported. |
| popPK | Crauwels_2019 | irrelevant | 1 | 0 | The study reports only relative changes (percent decreases) in cobicistat exposure during pregnancy compared to postpartum, lacking specific numeric disposition parameters (e.g., clearance or volume) and absolute PK values. |
| popPK | Custodio_2016 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of elvitegravir, with cobicistat only serving as a co-administered booster drug rather than the subject of the PK parameter estimation. |
| popPK | De_2020 | irrelevant | 0 | 0 | The paper is an in vitro virology study testing the antiviral activity of darunavir against SARS-CoV-2, with no pharmacokinetic parameters reported for cobicistat. |
| popPK | Eisenmann_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ibrutinib in mice, with cobicistat used only as a CYP3A inhibitor/comparator agent, and no PK parameters for cobicistat itself are reported. |
| popPK | Gallucci_2024 | irrelevant | 0 | 0 | The paper describes in-vitro antiviral activity (EC50 values) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for cobicistat. |
| popPK | Hsu_2022 | irrelevant | 0 | 0 | The study is an observational cohort analysis of weight gain outcomes in HIV patients, containing no pharmacokinetic parameters for cobicistat. |
| popPK | Kumar_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetic interaction of cobicistat on the probe drug dabigatran, not the disposition parameters of cobicistat itself. |
| popPK | López-Ruz_2018 | irrelevant | 0 | 0 | The study focuses on viral load and semen quality in HIV patients, reporting only Darunavir concentrations in seminal plasma, with no pharmacokinetic parameters (CL, V, ka, etc.) for Cobicistat. |
| popPK | Moltó_2018 | relevant | 8 | 1 | The study reports pharmacokinetic data for cobicistat in humans, but the abstract provides only percentage changes in exposure (AUC, Cmax, C24) rather than absolute numeric parameter values like clearance or volume. |
| popPK | Stillemans_2021 | irrelevant | 3 | 0 | The study focuses on darunavir PK, treating cobicistat as a booster with minimal analysis and no reported numeric PK parameters for cobicistat in the provided evidence. |
| popPK | Westra_2025 | irrelevant | 1 | 0 | This is a population pharmacokinetic study of osimertinib where cobicistat acts as a CYP3A inhibitor/booster, not the subject drug; no pharmacokinetic parameters (CL, V, etc.) for cobicistat itself are reported. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screening assay where cobicistat is used as a test compound to measure viral inhibition (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:49 UTC</sub>
