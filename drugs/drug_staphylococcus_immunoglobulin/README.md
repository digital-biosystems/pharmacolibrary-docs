<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;staphylococcus immunoglobulin&quot;}]"></div>

# staphylococcus immunoglobulin

- **generic name:** staphylococcus immunoglobulin
- **ATC codes:** `J06BB08`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Staphylococcus immunoglobulin is a specific immunoglobulin intended to provide passive immunity against staphylococcal infections. It is classified among immune sera and specific immunoglobulins, but no current marketing authorisation information is available, so its present availability is unclear.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:59 | 4:06 | 0/0/0 | 0/0/0 | 0/0/0 | 48,284/1,691 | einfracz / qwen3.8-27b | 4 | 1/3 | 3/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Theobald_1995.pdf` | Theobald K et al., Pharmacokinetics of single and multiple…, Vox sanguinis (1995) | popPK | 9 | [10.1111/j.1423-0410.1995.tb02536.x](https://doi.org/10.1111/j.1423-0410.1995.tb02536.x) | [7725671](https://pubmed.ncbi.nlm.nih.gov/7725671) | The study explicitly reports the pharmacokinetics of IVIG enriched with anti-Staphylococcus aureus alpha-toxin antibodies (staphylococcus_immunoglobulin) and provides specific half-life values. |

<sub>queue written 2026-10-07T14:59:29.440710+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alemie_2025 | irrelevant | 0 | 0 | The study investigates immunological mechanisms (IgG unfolding and macrophage phagocytosis) and does not report any pharmacokinetic parameters for Staphylococcus immunoglobulin. |
| popPK | Bateman_2016 | irrelevant | 0 | 0 | The provided evidence is a table of contents for a critical care conference and does not contain any pharmacokinetic data or quantitative disposition parameters for staphylococcus immunoglobulin. |
| popPK | Biesbrock_1991 | irrelevant | 0 | 0 | The study examines the interaction of salivary mucin and IgA with Staphylococcus aureus bacteria, which is a microbiological/mechanistic study and not a pharmacokinetic study of a drug. |
| popPK | Boghossian_1985 | irrelevant | 0 | 0 | The paper investigates host defense mechanisms in sickle cell disease and does not report pharmacokinetic parameters (CL, V, etc.) for staphylococcus_immunoglobulin. |
| popPK | Gross_1978 | irrelevant | 0 | 0 | The study reports the pharmacokinetics (clearance) of the Staphylococcus aureus bacteria from the lungs, not the pharmacokinetic disposition of the drug staphylococcus immunoglobulin. |
| popPK | Guo_2019 | irrelevant | 0 | 0 | The paper is a review on platelets and infectious diseases (including Staphylococcus aureus) but contains no pharmacokinetic data for staphylococcus immunoglobulin. |
| popPK | Jones_1984 | irrelevant | 0 | 0 | The paper describes an immunotherapy treatment using Staphylococcus aureus for cats and does not report pharmacokinetic parameters for staphylococcus_immunoglobulin. |
| popPK | Katsunuma_1985 | irrelevant | 0 | 0 | The paper is a clinical evaluation of cefotaxime for pneumonia and does not report pharmacokinetic parameters for staphylococcus_immunoglobulin. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The paper describes the binding properties and immunogenicity of a monoclonal antibody against Staphylococcal protein A, not the pharmacokinetics of a drug called "staphylococcus_immunoglobulin". |
| popPK | Nilsson_1999 | irrelevant | 0 | 0 | The paper studies the immunological role of NK cells in S. aureus arthritis in mice and does not report pharmacokinetic parameters for staphylococcus_immunoglobulin. |
| popPK | Paavonen_1980 | irrelevant | 0 | 0 | The paper focuses on the immunosuppressive effects of cyclosporin A and mouse immune suppression mechanisms, with no pharmacokinetic data for staphylococcus immunoglobulin. |
| popPK | Ryan_2010 | irrelevant | 0 | 0 | The paper is a review of rhinosinusitis comorbidities and does not contain pharmacokinetic data for staphylococcus_immunoglobulin. |
| popPK | Schoeb_1982 | irrelevant | 0 | 0 | The study is an infectious disease/microbiology paper investigating Mycoplasma growth in rats and does not report pharmacokinetic parameters for staphylococcus_immunoglobulin. |
| popPK | Snyder_1984 | irrelevant | 0 | 0 | The study focuses on the immunological treatment of feline leukemia virus using Staphylococcus aureus Cowan I as an adsorbent, rather than the pharmacokinetics of staphylococcus_immunoglobulin. |
| popPK | Stentzel_2017 | irrelevant | 0 | 0 | The paper is an immunological study measuring IgG antibody response and immune function, not a pharmacokinetic study of drug disposition parameters. |
| popPK | Varshney_2018 | irrelevant | 0 | 0 | The paper describes the mechanism and efficacy of a monoclonal antibody (514G3) against Staphylococcus aureus, not the pharmacokinetics of "staphylococcus_immunoglobulin" (which is not a standard drug; the paper likely confused the target organism or a hypothetical vaccine/immunoglobulin product with the bacterial pathogen, or the query drug name is a mismatch for this immunology study). |
| popPK | Verhoef_1991 | irrelevant | 0 | 0 | The paper is a review of host-pathogen relationships and immunology in respiratory infections, not a pharmacokinetic study of staphylococcus immunoglobulin. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper investigates the role of Siglec-E in bacterial clearance and is not a pharmacokinetic study of staphylococcus_immunoglobulin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
