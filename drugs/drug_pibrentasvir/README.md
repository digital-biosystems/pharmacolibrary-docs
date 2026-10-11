<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Pibrentasvir&quot;}]"></div>

# Pibrentasvir

- **generic name:** Pibrentasvir
- **ATC codes:** `J05AP57`
- **DrugBank:** [DB13878](https://go.drugbank.com/drugs/DB13878) · **PubChem:** [CID 58031952](https://pubchem.ncbi.nlm.nih.gov/compound/58031952)
- **molar mass:** 1113.201 g/mol (C57H65F5N10O8) — DrugBank
- **groups:** approved, investigational

## About

Pibrentasvir is an antiviral drug used to treat hepatitis C virus infections. It is an approved medicine and is used in combination with other hepatitis C treatments.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q39048005](https://www.wikidata.org/wiki/Q39048005) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pibrentasvir | parent | 1113.2 | C57H65F5N10O8 | DrugBank | [58031952](https://pubchem.ncbi.nlm.nih.gov/compound/58031952) | Thakre_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:24 | 2:23 | 1/0/0 | 3/0/0 | 0/0/0 | 171,460/6,476 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Thakre_2026_reference](drugs/drug_pibrentasvir/Pibrentasvir_Thakre2026_reference.md) | held back | 1-compartment, oral | 7 (+2 cov.) | Thakre N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01637-1](https://doi.org/10.1007/s40262-026-01637-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ng_2017_HCV_replication](drugs/drug_pibrentasvir/pd_Ng_2017_HCV_replication.md) | HCV replication in replicon cells (luciferase reporter activity) ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Ng TI et al., Antimicrobial agents and ch… (2017) | [10.1128/AAC.02558-16](https://doi.org/10.1128/AAC.02558-16) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nguyen_2020_RLU](drugs/drug_pibrentasvir/pd_Nguyen_2020_RLU.md) | HCV replicon replication (luciferase activity) ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Nguyen D et al., Efficacy of NS5A inhibitors against unu…, Journal of hepatology (2020) | [10.1016/j.jhep.2020.05.029](https://doi.org/10.1016/j.jhep.2020.05.029) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Schnell_2018_EC50](drugs/drug_pibrentasvir/pd_Schnell_2018_EC50.md) | HCV replicon replication (luciferase reporter) inhibition by pibrentasvir in transient replicon assay ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Schnell G et al., Hepatitis C virus genetic diversity by…, PloS one (2018) | [10.1371/journal.pone.0205186](https://doi.org/10.1371/journal.pone.0205186) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pibrentasvir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Suleiman_2020.pdf` | Suleiman AA et al., Population Pharmacokinetics of Glecapre…, Journal of clinical pharmac… (2020) | popPK | 9 | [10.1002/jcph.1524](https://doi.org/10.1002/jcph.1524) | [31515816](https://pubmed.ncbi.nlm.nih.gov/31515816) | Population PK (2-compartment model) of pibrentasvir in humans, but only exposure ratios (e.g., 21% higher AUC with cirrhosis) appear; CL/V/parameter estimates likely in tables/supplements not provided. |

<sub>queue written 2026-10-07T16:22:55.594296+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ng_2017 | irrelevant | 0 | 0 | In vitro antiviral activity/resistance study with EC50s only; no PK disposition parameters (CL, V, half-life, or PK model) for pibrentasvir. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | In vitro replicon study of antiviral EC50 efficacy, not a PK study; no disposition parameters (CL, V, half-life) for pibrentasvir are reported. |
| popPK | Oberoi_2020 | irrelevant | 2 | 1 | This is a QT/ECG safety study; pibrentasvir is dosed but no PK disposition parameters (CL, V, half-life, population-PK model) are reported, only concentration-QTc relationships. |
| popPK | Schnell_2018 | irrelevant | 0 | 0 | This is an HCV genetic diversity/virology study; pibrentasvir is only the treatment drug and no PK parameters (CL, V, half-life, PK model) are reported. |
| popPK | Suleiman_2020 | relevant | 9 | 4 | Population PK (2-compartment model) of pibrentasvir in humans, but only exposure ratios (e.g., 21% higher AUC with cirrhosis) appear; CL/V/parameter estimates likely in tables/supplements not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:22 UTC</sub>
