<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefpirome&quot;}]"></div>

# cefpirome

- **generic name:** cefpirome
- **ATC codes:** `J01DE02`
- **DrugBank:** [DB13682](https://go.drugbank.com/drugs/DB13682) · **PubChem:** not captured
- **molar mass:** 514.577 g/mol (C22H22N6O5S2) — DrugBank
- **groups:** approved

## About

Cefpirome is a fourth-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibiotic, though it does not appear to be authorised across the whole European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2943814](https://www.wikidata.org/wiki/Q2943814) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefpirome | parent | 514.577 | C22H22N6O5S2 | DrugBank | — | Malerczyk_1987, Rajput_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:10 | 6:22 | 0/3/2 | 0/0/0 | 0/0/0 | 207,422/11,835 | einfracz / qwen3.8-27b | 7 | 2/3 | 7/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Malerczyk_1987_reference](drugs/drug_cefpirome/Cefpirome_Malerczyk1987_reference.md) | — | 1-compartment (no model) | 2 | Malerczyk V et al., Single and multiple dose pharmacokineti…, Infection (1987) | [10.1007/BF01646053](https://doi.org/10.1007/BF01646053) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Rajput_2008_reference](drugs/drug_cefpirome/Cefpirome_Rajput2008_reference.md) | — | 1-compartment (no model) | 4 | Rajput N et al., Influence of experimentally induced fev…, Environmental toxicology an… (2008) | [10.1016/j.etap.2008.06.003](https://doi.org/10.1016/j.etap.2008.06.003) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Haseeb_2022_reference](drugs/drug_cefpirome/Cefpirome_Haseeb2022_reference.md) | — | 2-compartment (no model) | 3 | Haseeb A et al., Dose optimization of β-lactams antibiot…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.964005](https://doi.org/10.3389/fphar.2022.964005) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nakayama_1992_reference](drugs/drug_cefpirome/Cefpirome_Nakayama1992_reference.md) | — | 1-compartment (no model) | 0 | Nakayama I et al., Single- and multiple-dose pharmacokinet…, Journal of clinical pharmac… (1992) | [10.1002/j.1552-4604.1992.tb03834.x](https://doi.org/10.1002/j.1552-4604.1992.tb03834.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ogata_1991_reference](drugs/drug_cefpirome/Cefpirome_Ogata1991_reference.md) | — | 1-compartment (no model) | 0 | Ogata Y et al., [Pharmacokinetics of cefpirome (CPR) in…, Kansenshogaku zasshi. The J… (1991) | [10.11150/kansenshogakuzasshi1970.65.1514](https://doi.org/10.11150/kansenshogakuzasshi1970.65.1514) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 46 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bulitta_2011.pdf` | Bulitta JB et al., Comparable population pharmacokinetics…, Antimicrobial agents and ch… (2011) | popPK | 10 | [10.1128/AAC.01484-10](https://doi.org/10.1128/AAC.01484-10) | [21402834](https://pubmed.ncbi.nlm.nih.gov/21402834) | The paper is a population PK study of cefpirome in humans, but specific numeric parameter values are not explicitly listed in the abstract text provided (only percentages and doses). |
| `Maass_1987.pdf` | Maass L et al., Pharmacokinetics of cefpirome (HR 810),…, Infection (1987) | popPK | 10 | [10.1007/BF01646052](https://doi.org/10.1007/BF01646052) | [3610329](https://pubmed.ncbi.nlm.nih.gov/3610329) | The study reports pharmacokinetic parameters for cefpirome in humans using a two-compartment model, with specific values for Cmax and t1/2 present in the text, though other parameters like CL and V are not explicitly listed in the provided evidence. |
| `Malerczyk_1987.pdf` | Malerczyk V et al., Single and multiple dose pharmacokineti…, Infection (1987) | popPK | 10 | [10.1007/BF01646053](https://doi.org/10.1007/BF01646053) | [3610330](https://pubmed.ncbi.nlm.nih.gov/3610330) | Study reports quantitative PK parameters for cefpirome in humans, including a two-compartment model fit and a specific median half-life (2 h), though full CL and V values are not explicitly listed in the text. |
| `Rajput_2008.pdf` | Rajput N et al., Influence of experimentally induced fev…, Environmental toxicology an… (2008) | popPK | 10 | [10.1016/j.etap.2008.06.003](https://doi.org/10.1016/j.etap.2008.06.003) | [21791379](https://pubmed.ncbi.nlm.nih.gov/21791379) | The study reports quantitative disposition parameters (Vd, AUC, t1/2, Cl) for cefpirome in buffalo calves. |
| `Roos_2007.pdf` | Roos JF et al., Population pharmacokinetics and pharmac…, Intensive care medicine (2007) | popPK | 10 | [10.1007/s00134-007-0573-7](https://doi.org/10.1007/s00134-007-0573-7) | [17342515](https://pubmed.ncbi.nlm.nih.gov/17342515) | The paper describes a population pharmacokinetic model for cefpirome, but the extracted evidence provided contains only the abstract and lacks the specific numeric parameter values (CL, V, etc.) which are typically in the results or tables. |
| `Badian_1988.pdf` | Badian M et al., Safety, tolerance and pharmacokinetics…, Chemotherapy (1988) | popPK | 9 | [10.1159/000238594](https://doi.org/10.1159/000238594) | [3180904](https://pubmed.ncbi.nlm.nih.gov/3180904) | The study reports the half-life (2 h) from a two-compartment model, but other quantitative parameters like CL and V are not explicitly listed in the provided text. |
| `Maass_1987_2.pdf` | Maass L et al., Dose linearity testing of intravenous c…, Infection (1987) | popPK | 9 | [10.1007/BF01646051](https://doi.org/10.1007/BF01646051) | [3610328](https://pubmed.ncbi.nlm.nih.gov/3610328) | The study reports PK data for cefpirome in humans, but only provides specific values for dose linearity (r-value) and a general estimate for half-life (~2h), lacking specific numeric values for clearance, volume, or intercompartmental clearance in the text. |
| `Nakayama_1992.pdf` | Nakayama I et al., Single- and multiple-dose pharmacokinet…, Journal of clinical pharmac… (1992) | popPK | 9 | [10.1002/j.1552-4604.1992.tb03834.x](https://doi.org/10.1002/j.1552-4604.1992.tb03834.x) | [1564130](https://pubmed.ncbi.nlm.nih.gov/1564130) | Study reports quantitative PK parameters for cefpirome in humans, specifically citing a half-life of 1.7 hours and a two-compartment model, though specific clearance or volume values are not explicitly listed in the provided text. |
| `Isert_1992.pdf` | Isert D et al., Pharmacokinetics of cefpirome administe…, The Journal of antimicrobia… (1992) | popPK | 5 | [10.1093/jac/29.suppl_a.31](https://doi.org/10.1093/jac/29.suppl_a.31) | [1601754](https://pubmed.ncbi.nlm.nih.gov/1601754) | The study describes a two-compartment PK model for cefpirome in rats and dogs, but specific quantitative values for clearance, volume, or rate constants are not present in the provided evidence, only half-life ranges and urinary recovery percentages. |
| `Müller_1997.pdf` | Müller M et al., Relationship between serum and free int…, Journal of clinical pharmac… (1997) | popPK | 5 | [10.1002/j.1552-4604.1997.tb04294.x](https://doi.org/10.1002/j.1552-4604.1997.tb04294.x) | [9506005](https://pubmed.ncbi.nlm.nih.gov/9506005) | The study describes a population-PK model fit for cefpirome, but no specific numeric parameter values (CL, V, etc.) are present in the provided text. |

<sub>queue written 2026-10-07T11:06:54.611268+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Badian_1988 | relevant | 9 | 2 | The study reports the half-life (2 h) from a two-compartment model, but other quantitative parameters like CL and V are not explicitly listed in the provided text. |
| popPK | Bulitta_2011 | relevant | 10 | 4 | The paper is a population PK study of cefpirome in humans, but specific numeric parameter values are not explicitly listed in the abstract text provided (only percentages and doses). |
| popPK | Facca_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftizoxime, not cefpirome. |
| popPK | Fitoussi_1995 | irrelevant | 1 | 0 | This is an in vitro pharmacodynamic study simulating a CSF concentration profile, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for cefpirome. |
| popPK | Haseeb_2022 | irrelevant | 0 | 0 | The paper is a systematic review of β-lactam antibiotics (penicillins, cephalosporins, carbapenems) in pediatrics and adults, and cefpirome is not mentioned or studied in the provided evidence. |
| popPK | Helfer_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftaroline, not cefpirome. |
| popPK | Isert_1992 | relevant | 5 | 0 | The study describes a two-compartment PK model for cefpirome in rats and dogs, but specific quantitative values for clearance, volume, or rate constants are not present in the provided evidence, only half-life ranges and urinary recovery percentages. |
| popPK | Kang_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for meropenem, and cefpirome is only mentioned as a comparator in the discussion with no quantitative PK values provided. |
| popPK | Kashuba_1996 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ceftazidime, not cefpirome. |
| popPK | Maass_1987 | relevant | 10 | 4 | The study reports pharmacokinetic parameters for cefpirome in humans using a two-compartment model, with specific values for Cmax and t1/2 present in the text, though other parameters like CL and V are not explicitly listed in the provided evidence. |
| popPK | Maass_1987_2 | relevant | 9 | 3 | The study reports PK data for cefpirome in humans, but only provides specific values for dose linearity (r-value) and a general estimate for half-life (~2h), lacking specific numeric values for clearance, volume, or intercompartmental clearance in the text. |
| popPK | Marchand_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amoxicillin in rats, with cefadroxil (a different cephalosporin) used only for probe recovery, and cefpirome is not mentioned or studied. |
| popPK | Müller_1997 | relevant | 5 | 0 | The study describes a population-PK model fit for cefpirome, but no specific numeric parameter values (CL, V, etc.) are present in the provided text. |
| popPK | Roos_2007 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for cefpirome, but the extracted evidence provided contains only the abstract and lacks the specific numeric parameter values (CL, V, etc.) which are typically in the results or tables. |
| popPK | Santos_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amphotericin B in rats, not cefpirome. |
| popPK | Vasseur_2014 | irrelevant | 0 | 0 | The study focuses on the antimicrobial efficacy of cefquinome (a different drug) and its impact on resistance in rats, with no pharmacokinetic parameters for cefpirome reported. |
| popPK | Vossen_2018 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of doripenem, not cefpirome. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:07 UTC</sub>
