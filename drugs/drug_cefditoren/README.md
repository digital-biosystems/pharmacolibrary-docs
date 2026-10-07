<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefditoren&quot;}]"></div>

# cefditoren

- **generic name:** cefditoren
- **ATC codes:** `J01DD16`
- **DrugBank:** [DB01066](https://go.drugbank.com/drugs/DB01066) · **PubChem:** [CID 9870843](https://pubchem.ncbi.nlm.nih.gov/compound/9870843)
- **molar mass:** 506.578 g/mol (C19H18N6O5S3) — DrugBank
- **groups:** approved, investigational

## About

Cefditoren is a third-generation cephalosporin antibiotic used to treat bacterial infections such as acute bronchitis, pharyngitis, upper respiratory tract infections, pneumonia, and gram-negative infections. It is an approved oral antibiotic, used mainly for respiratory tract infections, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3664175](https://www.wikidata.org/wiki/Q3664175) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefditoren | parent | 506.578 | C19H18N6O5S3 | DrugBank | [9870843](https://pubchem.ncbi.nlm.nih.gov/compound/9870843) | Matsumoto_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:24 | 5:03 | 0/0/1 | 0/0/0 | 0/0/0 | 294,921/26,416 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Matsumoto_2013_reference](drugs/drug_cefditoren/Cefditoren_Matsumoto2013_reference.md) | — | 1-compartment (no model) | 2 | Matsumoto K et al., Population pharmacokinetic analysis of…, The Japanese journal of ant… (2013) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefditoren) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lodise_2008.pdf` | Lodise TP et al., Use of population pharmacokinetic model…, Antimicrobial agents and ch… (2008) | popPK | 10 | [10.1128/AAC.00736-06](https://doi.org/10.1128/AAC.00736-06) | [17485507](https://pubmed.ncbi.nlm.nih.gov/17485507) | The paper describes a population PK model and reports MIC cutoffs where target attainment fails, but specific numeric PK parameter values (CL, V, ka, etc.) are not present in the provided text. |
| `Matsumoto_2013.pdf` | Matsumoto K et al., Population pharmacokinetic analysis of…, The Japanese journal of ant… (2013) | popPK | 10 | not captured | [24649799](https://pubmed.ncbi.nlm.nih.gov/24649799) | The paper reports a population PK model for cefditoren in pediatric patients with all numeric parameter values (ka, CL/F, Vd/F, Tlag) explicitly provided in the text. |
| `Matsumoto_2014.pdf` | Matsumoto K et al., Population pharmacokinetics of cefditor…, The Japanese journal of ant… (2014) | popPK | 10 | not captured | [24809208](https://pubmed.ncbi.nlm.nih.gov/24809208) | The paper reports a population pharmacokinetic model for cefditoren pivoxil in humans, but the specific numeric values for clearance, volume, and rate constants are not present in the provided abstract or evidence text. |
| `Igarashi_2023.pdf` | Igarashi Y et al., In vivo Pharmacokinetics/Pharmacodynami…, Pharmaceutical research (2023) | popPK | 9 | [10.1007/s11095-023-03539-4](https://doi.org/10.1007/s11095-023-03539-4) | [37253866](https://pubmed.ncbi.nlm.nih.gov/37253866) | The study performs PK/PD modeling in mice and refers to human PPK data, but the specific numeric PK parameter values are not present in the provided text. |
| `Sádaba_2007.pdf` | Sádaba B et al., Pharmacokinetic/pharmacodynamic serum a…, Revista espanola de quimiot… (2007) | popPK | 7 | not captured | [17530036](https://pubmed.ncbi.nlm.nih.gov/17530036) | The study reports key quantitative PK parameters (half-life, Cmax) for cefditoren, but lacks explicit clearance, volume, or compartmental model parameters required for population-PK extraction. |

<sub>queue written 2026-10-07T10:20:16.871522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | González_2011 | irrelevant | 2 | 2 | The study is an in vitro pharmacodynamic simulation of antibiotic effects on bacterial resistance, not a pharmacokinetic study measuring disposition parameters like clearance or volume in a biological subject. |
| popPK | Igarashi_2023 | relevant | 9 | 0 | The study performs PK/PD modeling in mice and refers to human PPK data, but the specific numeric PK parameter values are not present in the provided text. |
| popPK | Lodise_2008 | relevant | 10 | 0 | The paper describes a population PK model and reports MIC cutoffs where target attainment fails, but specific numeric PK parameter values (CL, V, ka, etc.) are not present in the provided text. |
| popPK | Matsumoto_2014 | relevant | 10 | 2 | The paper reports a population pharmacokinetic model for cefditoren pivoxil in humans, but the specific numeric values for clearance, volume, and rate constants are not present in the provided abstract or evidence text. |
| popPK | Matsumoto_2014_2 | irrelevant | 2 | 0 | The paper uses existing population PK parameters for simulation but does not report original quantitative PK parameter values (CL, V, etc.) for cefditoren in the provided evidence. |
| popPK | Peric_2003 | irrelevant | 1 | 0 | The study is a microbiological susceptibility assessment using PK/PD breakpoints as criteria, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for cefditoren. |
| popPK | Rodríguez-Gascón_2020 | irrelevant | 1 | 0 | The study is a Monte Carlo simulation using PK data from other sources, and no original quantitative PK parameter values (CL, V, ka, t1/2) are reported in the evidence. |
| popPK | Sevillano_2008_2 | irrelevant | 1 | 0 | The paper reports in vitro pharmacodynamic data (bactericidal activity) rather than quantitative pharmacokinetic parameters (CL, V, etc.) for cefditoren. |
| popPK | Yamada_2022 | relevant | 3 | 1 | The paper uses a cefditoren population PK model for PTA simulations, but the actual parameter values (CL, V, etc.) are not listed in the provided evidence, only derived PTA percentages. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:20 UTC</sub>
