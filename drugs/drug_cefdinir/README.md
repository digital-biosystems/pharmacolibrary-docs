<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefdinir&quot;}]"></div>

# cefdinir

- **generic name:** cefdinir
- **ATC codes:** `J01DD15`
- **DrugBank:** [DB00535](https://go.drugbank.com/drugs/DB00535) · **PubChem:** [CID 6915944](https://pubchem.ncbi.nlm.nih.gov/compound/6915944)
- **molar mass:** 395.414 g/mol (C14H13N5O5S2) — DrugBank
- **groups:** approved, investigational

## About

Cefdinir is a third-generation cephalosporin antibiotic used to treat bacterial infections such as bronchitis, sinusitis, tonsillitis, otitis media, pharyngitis, and pneumonia. It is an approved antibiotic that is widely used, mainly for respiratory and other common bacterial infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1453445](https://www.wikidata.org/wiki/Q1453445) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:19 | 1:15 | 0/0/0 | 2/0/0 | 0/0/0 | 99,008/2,105 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gumbo_2020_cfu_mL](drugs/drug_cefdinir/pd_Gumbo_2020_cfu_mL.md) | Mycobacterium abscessus subspecies abscessus (Mab) viability ← cefdinir · direct sigmoid Emax (Hill) effect | — | Gumbo T et al., Repurposing drugs for treatment of Myco…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkz523](https://doi.org/10.1093/jac/dkz523) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Srivastava_2021_CFU](drugs/drug_cefdinir/pd_Srivastava_2021_CFU.md) | colony forming unit (CFU) ← cefdinir · direct sigmoid Emax (Hill) effect | — | Srivastava S et al., Cefdinir and β-Lactamase Inhibitor Inde…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.677005](https://doi.org/10.3389/fphar.2021.677005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefdinir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor/substrate, `SLC22A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MPO (inhibitor), Peptidoglycan transpeptidase (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Motohiro_1990.pdf` | Motohiro T et al., [Pharmacokinetics and clinical effects…, The Japanese journal of ant… (1990) | popPK | 8 | not captured | [2086819](https://pubmed.ncbi.nlm.nih.gov/2086819) | The paper reports pediatric PK parameters (Cmax, t1/2, AUC) for cefdinir, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text, only half-life and AUC. |

<sub>queue written 2026-10-07T10:19:01.364648+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nakazawa_1990 | irrelevant | 3 | 0 | The paper reports clinical efficacy and basic plasma/urine levels (Cmax, Tmax, AUC proxy via excretion) but does not provide calculated population pharmacokinetic parameters such as clearance (CL), volume of distribution (V), or rate constants (ka, ke) derived from a compartmental model. |
| popPK | Peric_2003 | irrelevant | 2 | 0 | This is a microbiology/susceptibility study that uses published PK/PD breakpoints to assess antimicrobial activity, rather than a pharmacokinetic study reporting original quantitative disposition parameters for cefdinir. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | This is an in vitro antimicrobial efficacy study (MIC and time-kill) against Mycobacterium kansasii, not a pharmacokinetic study reporting disposition parameters for cefdinir. |
| popPK | Torumkuney_2020 | irrelevant | 0 | 0 | The study reports antibiotic susceptibility data (MICs/breakpoints) for respiratory pathogens, not population pharmacokinetic parameters for cefdinir. |
| popPK | Torumkuney_2020_2 | irrelevant | 0 | 0 | This is a surveillance study reporting antibiotic susceptibility (MICs) of pathogens, not a pharmacokinetic study of cefdinir. |
| popPK | Torumkuney_2025 | irrelevant | 0 | 0 | The paper is an antimicrobial susceptibility surveillance study (MICs) and does not report pharmacokinetic disposition parameters for cefdinir. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
