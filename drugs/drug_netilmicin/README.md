<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;netilmicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Netilmicin_Sherwin2008_reference&quot;,&quot;label&quot;:&quot;Sherwin_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_netilmicin/Netilmicin_Sherwin2008_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# netilmicin

- **generic name:** netilmicin
- **ATC codes:** `J01GB07`, `S01AA23`
- **DrugBank:** [DB00955](https://go.drugbank.com/drugs/DB00955) · **PubChem:** [CID 441306](https://pubchem.ncbi.nlm.nih.gov/compound/441306)
- **molar mass:** 475.587 g/mol (C21H41N5O7) — DrugBank
- **groups:** approved

## About

Netilmicin is an aminoglycoside antibiotic used to treat serious bacterial infections, including eye infections. It is an approved medicine and is used mainly in hospital settings for severe infections, given by injection, with ophthalmic formulations also available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2553496](https://www.wikidata.org/wiki/Q2553496) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| netilmicin | parent | 475.587 | C21H41N5O7 | DrugBank | [441306](https://pubchem.ncbi.nlm.nih.gov/compound/441306) | Sherwin_2008, Siegel_1979, Wenk_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:38 | 2:11 | 1/1/3 | 1/0/0 | 0/0/0 | 87,664/8,308 | einfracz / qwen3.8-27b | 21 | 5/0 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sherwin_2008_reference](drugs/drug_netilmicin/Netilmicin_Sherwin2008_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Sherwin CM et al., Individualising netilmicin dosing in ne…, European journal of clinica… (2008) | [10.1007/s00228-008-0536-0](https://doi.org/10.1007/s00228-008-0536-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Siegel_1979_reference](drugs/drug_netilmicin/Netilmicin_Siegel1979_reference.md) | — | 1-compartment (no model) | 3 | Siegel JD et al., Pharmacokinetic properties of netilmici…, Antimicrobial agents and ch… (1979) | [10.1128/AAC.15.2.246](https://doi.org/10.1128/AAC.15.2.246) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Wenk_1979_reference](drugs/drug_netilmicin/Netilmicin_Wenk1979_reference.md) | — | 1-compartment (no model) | 6 | Wenk M et al., Multicompartment pharmacokinetics of ne…, European journal of clinica… (1979) | [10.1007/BF00605631](https://doi.org/10.1007/BF00605631) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Winslade_1987_2_reference](drugs/drug_netilmicin/Netilmicin_Winslade1987v2_reference.md) | — | 1-compartment (no model) | 2 | Winslade NE et al., Single-dose accumulation pharmacokineti…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.4.605](https://doi.org/10.1128/AAC.31.4.605) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jauregizar_2003_reference](drugs/drug_netilmicin/Netilmicin_Jauregizar2003_reference.md) | — | 1-compartment (no model) | 0 | Jauregizar N et al., Population pharmacokinetics of netilmic…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01783.x](https://doi.org/10.1046/j.1365-2125.2003.01783.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">mouse</span> | [Mattie_1990_ER](drugs/drug_netilmicin/pd_Mattie_1990_ER.md) | effect in vitro (ER) biomarker turnover ← netilmicin | — | Mattie H, A predictive parameter of antibacterial…, Scandinavian journal of inf… (1990) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=netilmicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 15 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fattinger_1991.pdf` | Fattinger K et al., Netilmicin in the neonate: population p…, Clinical pharmacology and t… (1991) | popPK | 10 | [10.1038/clpt.1991.103](https://doi.org/10.1038/clpt.1991.103) | [1855353](https://pubmed.ncbi.nlm.nih.gov/1855353) | The study is a population pharmacokinetic analysis of netilmicin in neonates, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Sherwin_2008.pdf` | Sherwin CM et al., Individualising netilmicin dosing in ne…, European journal of clinica… (2008) | popPK | 10 | [10.1007/s00228-008-0536-0](https://doi.org/10.1007/s00228-008-0536-0) | [18685839](https://pubmed.ncbi.nlm.nih.gov/18685839) | The paper is a population pharmacokinetic study of netilmicin in neonates that explicitly provides numeric equations for clearance and volume of distribution. |
| `Tréluyer_2000.pdf` | Tréluyer JM et al., Population pharmacokinetic analysis of…, Clinical pharmacology and t… (2000) | popPK | 10 | [10.1067/mcp.2000.106695](https://doi.org/10.1067/mcp.2000.106695) | [10872642](https://pubmed.ncbi.nlm.nih.gov/10872642) | The paper is a population pharmacokinetic study of netilmicin in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract or text, appearing only to be described qualitatively or likely contained in the full text/tables not included in the evidence. |
| `Wenk_1979.pdf` | Wenk M et al., Multicompartment pharmacokinetics of ne…, European journal of clinica… (1979) | popPK | 10 | [10.1007/BF00605631](https://doi.org/10.1007/BF00605631) | [520400](https://pubmed.ncbi.nlm.nih.gov/520400) | The study reports quantitative PK parameters (half-lives, Vdss, clearance) for netilmicin in humans, and all values are explicitly present in the abstract text. |
| `Chung_1980.pdf` | Chung M et al., Comparison of netilmicin and gentamicin…, Antimicrobial agents and ch… (1980) | popPK | 8 | [10.1128/AAC.17.2.184](https://doi.org/10.1128/AAC.17.2.184) | [7387140](https://pubmed.ncbi.nlm.nih.gov/7387140) | The study reports netilmicin pharmacokinetics in humans and provides a specific Cmax value, but the key disposition parameters (clearance, half-life, volumes) are only described qualitatively without numeric values provided in the evidence. |

<sub>queue written 2026-10-07T11:36:35.403278+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bauernfeind_1992_2 | irrelevant | 1 | 0 | This is a pharmacodynamic (bactericidal) study using netilmicin as a test drug, and it does not report any quantitative pharmacokinetic disposition parameters (clearance, volume, etc.) for netilmicin. |
| popPK | Blaser_1987_2 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic experiment comparing antibacterial activity of enoxacin and netilmicin, not a pharmacokinetic study determining disposition parameters for netilmicin. |
| popPK | Chung_1980 | relevant | 8 | 2 | The study reports netilmicin pharmacokinetics in humans and provides a specific Cmax value, but the key disposition parameters (clearance, half-life, volumes) are only described qualitatively without numeric values provided in the evidence. |
| popPK | Fattinger_1991 | relevant | 10 | 2 | The study is a population pharmacokinetic analysis of netilmicin in neonates, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Mattie_1990 | irrelevant | 1 | 0 | The paper describes a predictive model for antibiotic efficacy using pharmacokinetic parameters, but it does not report original netilmicin PK values (like CL, V, or t1/2) in the provided text, focusing instead on in vitro efficacy correlations. |
| popPK | Okubo_2002 | irrelevant | 2 | 0 | The study focuses on in-vitro antibacterial activity (MICs) and PK/PD ratios (AUC/MIC) for aminoglycosides including netilmicin, but it does not report primary population pharmacokinetic parameters such as clearance, volume of distribution, or half-life derived from a PK model. |
| popPK | Tréluyer_2000 | relevant | 10 | 2 | The paper is a population pharmacokinetic study of netilmicin in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract or text, appearing only to be described qualitatively or likely contained in the full text/tables not included in the evidence. |
| popPK | Wrześniok_2013 | irrelevant | 0 | 0 | The paper is an in-vitro study on melanogenesis and cytotoxicity, reporting no pharmacokinetic parameters (CL, V, etc.) for netilmicin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:36 UTC</sub>
