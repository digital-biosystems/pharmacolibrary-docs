<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefpodoxime&quot;}]"></div>

# cefpodoxime

- **generic name:** cefpodoxime
- **ATC codes:** `J01DD13`
- **DrugBank:** [DB01416](https://go.drugbank.com/drugs/DB01416) · **PubChem:** [CID 6335986](https://pubchem.ncbi.nlm.nih.gov/compound/6335986)
- **molar mass:** 427.455 g/mol (C15H17N5O6S2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Cefpodoxime is a third-generation cephalosporin antibiotic used to treat infections such as gonorrhea, bronchitis, tonsillitis, otitis media, cystitis, pharyngitis, and acute maxillary sinusitis. It is an approved antibacterial, also approved for veterinary use, and is used in human medicine as well as in animals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415173](https://www.wikidata.org/wiki/Q415173) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefpodoxime | parent | 427.455 | C15H17N5O6S2 | DrugBank | [6335986](https://pubchem.ncbi.nlm.nih.gov/compound/6335986) | Linnehan_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:11 | 1:15 | 0/1/0 | 0/0/0 | 0/0/0 | 80,602/2,580 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Linnehan_2024_reference](drugs/drug_cefpodoxime/Cefpodoxime_Linnehan2024_reference.md) | — | 1-compartment (no model) | 3 | Linnehan BK et al., POPULATION PHARMACOKINETICS OF CEFPODOX…, Journal of zoo and wildlife… (2024) | [10.1638/2023-0139](https://doi.org/10.1638/2023-0139) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefpodoxime) page (add drugs there; the set becomes a link).

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

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kearns_1998.pdf` | Kearns GL et al., Cefpodoxime pharmacokinetics in childre…, The Pediatric infectious di… (1998) | popPK | 10 | [10.1097/00006454-199809000-00010](https://doi.org/10.1097/00006454-199809000-00010) | [9779765](https://pubmed.ncbi.nlm.nih.gov/9779765) | The study reports quantitative pharmacokinetic parameters for cefpodoxime, including absorption rate (Ka) and time to maximum concentration (Tmax) for fed and fasted conditions, though clearance and volume values are not explicitly provided in the text. |
| `Linnehan_2024.pdf` | Linnehan BK et al., POPULATION PHARMACOKINETICS OF CEFPODOX…, Journal of zoo and wildlife… (2024) | popPK | 10 | [10.1638/2023-0139](https://doi.org/10.1638/2023-0139) | [39255202](https://pubmed.ncbi.nlm.nih.gov/39255202) | The paper reports a population pharmacokinetic model for cefpodoxime in bottlenose dolphins with key parameters (Cmax, Tmax, t1/2) in the abstract, but specific clearance (CL) and volume (V) values are likely in the full text/tables not provided. |
| `Abdel-Rahman_2000.pdf` | Abdel-Rahman SM et al., Cerebrospinal fluid pharmacokinetics of…, Journal of clinical pharmac… (2000) | popPK | 9 | [10.1177/00912700022008964](https://doi.org/10.1177/00912700022008964) | [10709158](https://pubmed.ncbi.nlm.nih.gov/10709158) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, AUC) and a compartmental model for cefpodoxime in piglets. |

<sub>queue written 2026-10-07T11:10:32.410354+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liu_2005 | irrelevant | 1 | 0 | The study is an in vitro PK-PD simulation using simulated human PK profiles rather than an original study reporting quantitative disposition parameters (CL, V, ka) for cefpodoxime. |
| popPK | Nicolaos_2003 | relevant | 4 | 1 | The study is a pharmacokinetic investigation in rats reporting bioavailability and standard NCA parameters, but specific numeric values for cefpodoxime's clearance, volume, or half-life are not present in the provided evidence. |
| popPK | ODonnell_2020 | irrelevant | 2 | 2 | The paper focuses on the PK of the beta-lactamase inhibitor ETX1317 and its prodrug ETX0282, with cefpodoxime serving only as a companion drug for efficacy and PK/PD modeling rather than being the primary subject of a PK characterization study. |
| popPK | Torumkuney_2020_2 | irrelevant | 0 | 0 | This is an antimicrobial susceptibility surveillance study reporting MIC and breakpoint data, not a pharmacokinetic study of cefpodoxime. |
| popPK | Torumkuney_2020_3 | irrelevant | 0 | 0 | This is an antimicrobial susceptibility survey (MICs) reporting PK/PD breakpoints, not a study measuring pharmacokinetic parameters (CL, V, ka) for cefpodoxime. |
| popPK | Torumkuney_2025 | irrelevant | 0 | 0 | This is an antimicrobial susceptibility study (MICs) for S. pneumoniae and H. influenzae, not a pharmacokinetic study, and contains no PK parameters for cefpodoxime. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:10 UTC</sub>
