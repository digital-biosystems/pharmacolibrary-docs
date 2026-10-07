<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;aztreonam&quot;}]"></div>

# aztreonam

- **generic name:** aztreonam
- **ATC codes:** `J01DF01`
- **DrugBank:** [DB00355](https://go.drugbank.com/drugs/DB00355) · **PubChem:** [CID 9568617](https://pubchem.ncbi.nlm.nih.gov/compound/9568617)
- **molar mass:** 435.433 g/mol (C13H17N5O8S2) — DrugBank
- **groups:** approved, investigational

## About

Aztreonam is a monobactam antibiotic used to treat infections caused by gram-negative bacteria, including Pseudomonas infections, urinary tract, skin, and respiratory infections, and it is inhaled for cystic fibrosis. It is an approved medicine included on the WHO essential medicines list, and a product for cystic fibrosis and respiratory tract infections is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418546](https://www.wikidata.org/wiki/Q418546) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aztreonam | parent | 435.433 | C13H17N5O8S2 | DrugBank | [9568617](https://pubchem.ncbi.nlm.nih.gov/compound/9568617) | Das_2024, Zhang_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:16 | 5:16 | 0/3/0 | 0/0/0 | 0/0/0 | 403,406/28,859 | einfracz / qwen3.8-27b | 11 | 3/8 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Barrasa_2024_reference](drugs/drug_aztreonam/Aztreonam_Barrasa2024_reference.md) | — | 2-compartment (no model) | 3 | Barrasa H et al., Optimizing Antibiotic Therapy for, Antibiotics (Basel, Switzer… (2024) | [10.3390/antibiotics13060553](https://doi.org/10.3390/antibiotics13060553) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Das_2024_reference](drugs/drug_aztreonam/Aztreonam_Das2024_reference.md) | — | 3-compartment (no model) | 11 (+10 cov.) | Das S et al., Dose selection for aztreonam-avibactam,…, European journal of clinica… (2024) | [10.1007/s00228-023-03609-x](https://doi.org/10.1007/s00228-023-03609-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2023_reference](drugs/drug_aztreonam/Aztreonam_Zhang2023_reference.md) | — | 1-compartment (no model) | 0 | Zhang J et al., Pharmacokinetic/Pharmacodynamic Evaluat…, Pharmaceutics (2023) | [10.3390/pharmaceutics15010251](https://doi.org/10.3390/pharmaceutics15010251) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aztreonam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Friedrich_1991.pdf` | Friedrich LV et al., Aztreonam pharmacokinetics in burn pati…, Antimicrobial agents and ch… (1991) | popPK | 10 | [10.1128/AAC.35.1.57](https://doi.org/10.1128/AAC.35.1.57) | [2014982](https://pubmed.ncbi.nlm.nih.gov/2014982) | Study reports PK parameters for aztreonam in humans, but specific numeric values for clearance, intercompartmental clearance, and half-life are not explicitly listed in the provided text, only volumes of distribution. |
| `Swabb_1983.pdf` | Swabb EA et al., Metabolism and pharmacokinetics of aztr…, Antimicrobial agents and ch… (1983) | popPK | 8 | [10.1128/AAC.24.3.394](https://doi.org/10.1128/AAC.24.3.394) | [6685455](https://pubmed.ncbi.nlm.nih.gov/6685455) | The study is a PK study of aztreonam in humans that reports half-lives and bioavailability but does not explicitly list the numeric values for clearance (CL) and volume (V). |

<sub>queue written 2026-10-07T10:11:58.266444+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrasa_2024 | irrelevant | 0 | 0 | The study uses literature-sourced PK parameters for Monte Carlo simulations of multiple drugs (including aztreonam) to determine PK/PD breakpoints but does not report original quantitative PK parameter values (e.g., CL, V, ka) for aztreonam in the text. |
| popPK | Chauzy_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic modeling of MIC checkerboard data, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Friedrich_1991 | relevant | 10 | 4 | Study reports PK parameters for aztreonam in humans, but specific numeric values for clearance, intercompartmental clearance, and half-life are not explicitly listed in the provided text, only volumes of distribution. |
| popPK | Fromage_2026 | irrelevant | 2 | 2 | The study is a Monte Carlo simulation that implements a previously published PopPK model (Xie et al.) without reporting the model's quantitative structural parameters (CL, V, Q) in the text or evidence. |
| popPK | Goutelle_2023 | irrelevant | 1 | 0 | The paper is a PK/PD simulation study using literature data that reports probability of target attainment (PTA) and dosing recommendations, but does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for aztreonam. |
| popPK | Kok_2025 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study of P. aeruginosa using aztreonam as an antimicrobial agent; it does not report pharmacokinetic parameters (CL, V, etc.) for aztreonam itself. |
| popPK | Kong_2026 | irrelevant | 0 | 0 | The study focuses on antimicrobial susceptibility (MICs) and in vivo antibacterial efficacy (survival/bacterial load) in insect and mouse models, not on pharmacokinetic parameters (CL, V, etc.) for aztreonam. |
| popPK | Kunz_2026 | irrelevant | 1 | 0 | This is a pharmacodynamic study using an in vitro hollow-fiber infection model with simulated dosing, not a study reporting quantitative pharmacokinetic parameters (CL, V, etc.) for aztreonam in a biological system. |
| popPK | Morales_2022 | irrelevant | 2 | 0 | This is a scoping review of beta-lactam therapeutic targets in pediatric sepsis; aztreonam is mentioned only briefly in a case report summary without reporting specific population PK parameters (CL, V) for aztreonam as the primary subject. |
| popPK | Nichols_2018 | irrelevant | 1 | 0 | The paper is a review of avibactam PK/PD targets and uses aztreonam only as a partner drug for context; it does not report original quantitative PK parameters for aztreonam. |
| popPK | Principe_2022 | relevant | 4 | 5 | The paper is a review that reports specific numeric PK parameters (Vd, Cl) for aztreonam in a Phase 2 trial context, but lacks a full compartmental model or population analysis for the drug alone. |
| popPK | Raber_2026 | relevant | 5 | 2 | Paper describes a population PK model for aztreonam-avibactam and cites general PK properties (half-life, Vd), but specific quantitative parameter estimates (CL, V, Q) for the final model are referenced as published elsewhere or in supplementary material not provided. |
| popPK | Swabb_1983 | relevant | 8 | 4 | The study is a PK study of aztreonam in humans that reports half-lives and bioavailability but does not explicitly list the numeric values for clearance (CL) and volume (V). |
| popPK | Xie_2025 | relevant | 10 | 4 | The paper reports a population PK model for aztreonam in humans, but the specific numeric parameter estimates (CL, Vc, etc.) are located in Table S3, which is not included in the provided evidence. |
| popPK | Yang_2026 | irrelevant | 3 | 0 | The paper is a simulation study using published models, and the specific numeric population parameter values (tvCL, tvV, etc.) are in Table S1 (supplementary) which is not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:12 UTC</sub>
