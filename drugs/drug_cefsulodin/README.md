<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefsulodin&quot;}]"></div>

# cefsulodin

- **generic name:** cefsulodin
- **ATC codes:** `J01DD03`
- **DrugBank:** [DB13499](https://go.drugbank.com/drugs/DB13499) · **PubChem:** not captured
- **molar mass:** 532.54 g/mol (C22H20N4O8S2) — DrugBank
- **groups:** experimental

## About

Cefsulodin is a third-generation cephalosporin antibiotic used to treat bacterial infections. It is not an approved medicine in major markets and is currently regarded as experimental, so it is not widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2943815](https://www.wikidata.org/wiki/Q2943815) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefsulodin | parent | 532.54 | C22H20N4O8S2 | DrugBank | — | Gibson_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:22 | 3:53 | 0/3/0 | 1/0/1 | 0/0/0 | 119,593/4,894 | einfracz / qwen3.8-27b | 7 | 0/1 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Gibson_1982_reference](drugs/drug_cefsulodin/Cefsulodin_Gibson1982_reference.md) | — | 1-compartment (no model) | 6 | Gibson TP et al., Cefsulodin kinetics in renal impairment, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.84](https://doi.org/10.1038/clpt.1982.84) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gibson_1984_reference](drugs/drug_cefsulodin/Cefsulodin_Gibson1984_reference.md) | — | 1-compartment (no model) | 0 | Gibson TP et al., Kinetics of cefsulodin in patients with…, Reviews of infectious disea… (1984) | [10.1093/clinids/6.supplement_3.s689](https://doi.org/10.1093/clinids/6.supplement_3.s689) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Matzke_1983_reference](drugs/drug_cefsulodin/Cefsulodin_Matzke1983_reference.md) | — | 1-compartment (no model) | 0 | Matzke GR et al., Cefsulodin pharmacokinetics in patients…, Antimicrobial agents and ch… (1983) | [10.1128/AAC.23.3.369](https://doi.org/10.1128/AAC.23.3.369) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bakthavatsalam_2020_Syk_integrin_cytoplasmic_domain_interactions](drugs/drug_cefsulodin/pd_Bakthavatsalam_2020_Syk_integrin_cytoplasmic_domain_interact.md) | Syk-integrin cytoplasmic domain interactions ← cefsulodin · inhibition effect | — | Bakthavatsalam D et al., Identification of Inhibitors of Integri…, Frontiers in immunology (2020) | [10.3389/fimmu.2020.575085](https://doi.org/10.3389/fimmu.2020.575085) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nishimura_1984_bacteriologic_response](drugs/drug_cefsulodin/pd_Nishimura_1984_bacteriologic_response.md) | bacteriologic response ← cefsulodin · categorical (graded) response model | — | Nishimura T et al., Clinical and pharmacokinetic study of p…, Reviews of infectious disea… (1984) | [10.1093/clinids/6.supplement_3.s751](https://doi.org/10.1093/clinids/6.supplement_3.s751) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nishimura_1984_clinical_response](drugs/drug_cefsulodin/pd_Nishimura_1984_clinical_response.md) | clinical response ← cefsulodin · categorical (graded) response model | — | Nishimura T et al., Clinical and pharmacokinetic study of p…, Reviews of infectious disea… (1984) | [10.1093/clinids/6.supplement_3.s751](https://doi.org/10.1093/clinids/6.supplement_3.s751) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 35 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gibson_1982.pdf` | Gibson TP et al., Cefsulodin kinetics in renal impairment, Clinical pharmacology and t… (1982) | popPK | 10 | [10.1038/clpt.1982.84](https://doi.org/10.1038/clpt.1982.84) | [7075110](https://pubmed.ncbi.nlm.nih.gov/7075110) | The abstract explicitly reports quantitative PK parameters (Vd, CL, t1/2) for cefsulodin in humans with renal impairment. |
| `Gibson_1984.pdf` | Gibson TP et al., Kinetics of cefsulodin in patients with…, Reviews of infectious disea… (1984) | popPK | 10 | [10.1093/clinids/6.supplement_3.s689](https://doi.org/10.1093/clinids/6.supplement_3.s689) | [6571338](https://pubmed.ncbi.nlm.nih.gov/6571338) | The study reports quantitative PK parameters (Vd, t1/2, dialysis clearance) for cefsulodin in humans. |
| `Matzke_1983.pdf` | Matzke GR et al., Cefsulodin pharmacokinetics in patients…, Antimicrobial agents and ch… (1983) | popPK | 10 | [10.1128/AAC.23.3.369](https://doi.org/10.1128/AAC.23.3.369) | [6847169](https://pubmed.ncbi.nlm.nih.gov/6847169) | The study reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for cefsulodin in humans, and all values are explicitly present in the text. |
| `Washida_1988.pdf` | Washida H et al., [Pharmacokinetic study of cefsulodin in…, The Japanese journal of ant… (1988) | popPK | 10 | not captured | [3241325](https://pubmed.ncbi.nlm.nih.gov/3241325) | The paper is a PK study of cefsulodin in humans with kidney dysfunction, reporting specific half-lives, clearance equations, AUC relationships, and urinary excretion rates. |
| `Granneman_1982.pdf` | Granneman GR et al., Cefsulodin kinetics in healthy subjects…, Clinical pharmacology and t… (1982) | popPK | 5 | [10.1038/clpt.1982.15](https://doi.org/10.1038/clpt.1982.15) | [7053312](https://pubmed.ncbi.nlm.nih.gov/7053312) | The study reports PK parameters for cefsulodin in humans, but lacks specific values for clearance (CL) and volume of distribution (V), listing only half-life and urinary recovery. |
| `Momose_1982.pdf` | Momose A et al., [The studies on distributions of cefsul…, The Japanese journal of ant… (1982) | popPK | 5 | not captured | [6304364](https://pubmed.ncbi.nlm.nih.gov/6304364) | The study reports pharmacokinetic distribution data (aqueous humor/plasma ratios, half-life) for cefsulodin in humans but lacks explicit clearance (CL), volume (V), or intercompartmental clearance (Q) parameters required for standard population-PK model extraction. |
| `Heilesen_1983.pdf` | Heilesen AM et al., Treatment of chronic pseudomonas aerugi…, Scandinavian journal of inf… (1983) | pd | 4 | [10.3109/inf.1983.15.issue-3.07](https://doi.org/10.3109/inf.1983.15.issue-3.07) | [6417770](https://www.ncbi.nlm.nih.gov/pubmed/6417770) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T11:21:27.033836+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of drug disposition in cystic fibrosis patients and does not report specific pharmacokinetic parameters for the drug cefsulodin. |
| popPK | Granneman_1982 | relevant | 5 | 3 | The study reports PK parameters for cefsulodin in humans, but lacks specific values for clearance (CL) and volume of distribution (V), listing only half-life and urinary recovery. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a retrospective clinical study of leptospirosis symptoms and lab findings, containing no pharmacokinetic data for cefsulodin. |
| popPK | Momose_1982 | relevant | 5 | 2 | The study reports pharmacokinetic distribution data (aqueous humor/plasma ratios, half-life) for cefsulodin in humans but lacks explicit clearance (CL), volume (V), or intercompartmental clearance (Q) parameters required for standard population-PK model extraction. |
| popPK | Yadav_2015 | irrelevant | 0 | 0 | The paper is an in vitro antimicrobial combination study involving imipenem and aminoglycosides; cefsulodin is not the subject drug and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:21 UTC</sub>
