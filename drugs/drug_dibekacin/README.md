<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;dibekacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dibekacin_Arancibia1995_reference&quot;,&quot;label&quot;:&quot;Arancibia_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dibekacin

- **generic name:** dibekacin
- **ATC codes:** `J01GB09`, `S01AA29`
- **DrugBank:** [DB13270](https://go.drugbank.com/drugs/DB13270) · **PubChem:** not captured
- **molar mass:** 451.521 g/mol (C18H37N5O8) — DrugBank
- **groups:** approved

## About

Dibekacin is an aminoglycoside antibiotic, related to kanamycin, used to treat bacterial infections. It is an approved medicine and is used mainly in Japan and some other Asian countries, given by injection or as eye drops.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3706873](https://www.wikidata.org/wiki/Q3706873) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dibekacin | parent | 451.521 | C18H37N5O8 | DrugBank | — | Arancibia_1987, Arancibia_1995 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:29 | 0:39 | 1/1/1 | 0/0/0 | 0/0/0 | 38,307/3,928 | einfracz / qwen3.8-27b | 6 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Arancibia_1995_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Arancibia A et al., Disposition kinetics of dibekacin in pa…, International journal of cl… (1995) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Arancibia_1987_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1987_reference.md) | — | 1-compartment (no model) | 3 | Arancibia A et al., Disposition kinetics of dibekacin in no…, International journal of cl… (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Campillo_1980_reference](drugs/drug_dibekacin/Dibekacin_Campillo1980_reference.md) | — | 1-compartment (no model) | 0 | Campillo JA et al., Disposition of Dibekacin in patients un…, European journal of clinica… (1980) | [10.1007/BF00561393](https://doi.org/10.1007/BF00561393) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arancibia_1987.pdf` | Arancibia A et al., Disposition kinetics of dibekacin in no…, International journal of cl… (1987) | popPK | 10 | not captured | [3557728](https://pubmed.ncbi.nlm.nih.gov/3557728) | The abstract explicitly reports quantitative two-compartment PK parameters including clearance, half-life, and rate constants for dibekacin in humans, though specific volume values are not listed. |
| `Arancibia_1995.pdf` | Arancibia A et al., Disposition kinetics of dibekacin in pa…, International journal of cl… (1995) | popPK | 10 | not captured | [8688988](https://pubmed.ncbi.nlm.nih.gov/8688988) | The text explicitly reports quantitative PK parameters (Cl, Vd, t1/2, k10) for dibekacin in humans, including values for normal and anephric subjects. |
| `Campillo_1980.pdf` | Campillo JA et al., Disposition of Dibekacin in patients un…, European journal of clinica… (1980) | popPK | 9 | [10.1007/BF00561393](https://doi.org/10.1007/BF00561393) | [7439256](https://pubmed.ncbi.nlm.nih.gov/7439256) | The study reports PK parameters for dibekacin in humans, but specific numeric values for clearance and volume are not explicitly listed in the text (only half-life is provided), suggesting the full parameter set is in the main text/tables not fully reproduced here. |
| `Motohiro_1985.pdf` | Motohiro T et al., [Fundamental and clinical studies on in…, The Japanese journal of ant… (1985) | popPK | 7 | not captured | [4079001](https://pubmed.ncbi.nlm.nih.gov/4079001) | The study reports AUC and half-life values for dibekacin in humans, but specific clearance (CL) and volume (V) parameters are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T11:29:18.962354+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Okubo_2002 | irrelevant | 2 | 0 | The study is in-vitro (MICs) and PK/PD index calculation only, not an in-vivo PK study reporting clearance/volume/half-life for dibekacin. |
| popPK | Tanigawara_2006_2 | irrelevant | 2 | 2 | The study reports population pharmacokinetic parameters for arbekacin, which is a derivative of dibekacin, not dibekacin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:29 UTC</sub>
