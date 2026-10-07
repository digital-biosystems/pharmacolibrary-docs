<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;daptomycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daptomycin_Lou2021_reference&quot;,&quot;label&quot;:&quot;Lou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daptomycin/Daptomycin_Lou2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# daptomycin

- **generic name:** daptomycin
- **ATC codes:** `J01XX09`
- **DrugBank:** [DB00080](https://go.drugbank.com/drugs/DB00080) · **PubChem:** [CID 16134395](https://pubchem.ncbi.nlm.nih.gov/compound/16134395)
- **molar mass:** 1620.693 g/mol (C72H101N17O26) — DrugBank
- **groups:** approved, investigational

## About

Daptomycin is an antibiotic used to treat serious bacterial infections, mainly those caused by gram-positive bacteria such as staphylococci, including skin infections, bacteremia, and infective endocarditis. It is an approved medicine authorised in the European Union and is generally used in hospital settings for severe infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418747](https://www.wikidata.org/wiki/Q418747) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| daptomycin | parent | 1620.69 | C72H101N17O26 | DrugBank | [16134395](https://pubchem.ncbi.nlm.nih.gov/compound/16134395) | García-Martínez_2022, Lou_2021, Olney_2024_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:06 | 8:15 | 1/3/0 | 0/0/0 | 0/0/0 | 138,470/8,950 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lou_2021_reference](drugs/drug_daptomycin/Daptomycin_Lou2021_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Lou Y et al., Population pharmacokinetics and individ…, European journal of pharmac… (2021) | [10.1016/j.ejps.2021.105818](https://doi.org/10.1016/j.ejps.2021.105818) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dvorchik_2004_reference](drugs/drug_daptomycin/Daptomycin_Dvorchik2004_reference.md) | — | 1-compartment (no model) | 0 | Dvorchik B et al., Population pharmacokinetics of daptomyc…, Antimicrobial agents and ch… (2004) | [10.1128/AAC.48.8.2799-2807.2004](https://doi.org/10.1128/AAC.48.8.2799-2807.2004) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [García-Martínez_2022_reference](drugs/drug_daptomycin/Daptomycin_GarcaMartnez2022_reference.md) | — | 2-compartment (no model) | 6 (+1 cov.) | García-Martínez T et al., Population Pharmacokinetic/Pharmacodyna…, Pharmaceutics (2022) | [10.3390/pharmaceutics14102226](https://doi.org/10.3390/pharmaceutics14102226) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Olney_2024_2_reference](drugs/drug_daptomycin/Daptomycin_Olney2024v2_reference.md) | — | 1-compartment (no model) | 0 | Olney KB et al., Daptomycin Dose Optimization in Pediatr…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2425](https://doi.org/10.1002/jcph.2425) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=daptomycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HPX (binder), LDLR (binder), SERPINA1 (binder), SHBG (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 131 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lou_2021.pdf` | Lou Y et al., Population pharmacokinetics and individ…, European journal of pharmac… (2021) | popPK | 10 | [10.1016/j.ejps.2021.105818](https://doi.org/10.1016/j.ejps.2021.105818) | [33771717](https://pubmed.ncbi.nlm.nih.gov/33771717) | The study reports explicit population pharmacokinetic parameter values (CL, Vc, Q, Vp) for daptomycin in the abstract. |
| `Olney_2024_2.pdf` | Olney KB et al., Daptomycin Dose Optimization in Pediatr…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2425](https://doi.org/10.1002/jcph.2425) | [38497326](https://pubmed.ncbi.nlm.nih.gov/38497326) | The paper describes a Monte Carlo simulation for pediatric daptomycin dosing, which is based on a population PK model, but the specific numeric parameter values (CL, V, Q, etc.) for the model are not explicitly listed in the provided abstract text, though the resulting exposure metrics (AUC, Cmin, PTA) are. |
| `Zhang_2024.pdf` | Zhang LC et al., Population pharmacokinetics of daptomyc…, The Journal of antimicrobia… (2024) | popPK | 10 | [10.1093/jac/dkae171](https://doi.org/10.1093/jac/dkae171) | [38814793](https://pubmed.ncbi.nlm.nih.gov/38814793) | The paper describes a population pharmacokinetic study of daptomycin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Olney_2024.pdf` | Olney KB et al., Fixed dose daptomycin: An opportunity f…, Pharmacotherapy (2024) | popPK | 9 | [10.1002/phar.4602](https://doi.org/10.1002/phar.4602) | [39078247](https://pubmed.ncbi.nlm.nih.gov/39078247) | The paper describes a prospective population PK study for daptomycin in humans, reporting exposure metrics (AUC) and efficacy/toxicity targets, but the specific quantitative model parameters (CL, V, etc.) are likely in supplementary material or tables not included in the provided text. |
| `Wei_2020.pdf` | Wei XC et al., Pharmacokinetic/Pharmacodynamic Analysi…, Journal of clinical pharmac… (2020) | popPK | 8 | [10.1002/jcph.1576](https://doi.org/10.1002/jcph.1576) | [32080861](https://pubmed.ncbi.nlm.nih.gov/32080861) | The study is a pharmacokinetic/pharmacodynamic analysis of daptomycin in pediatric humans, but the specific numeric PK parameter values (CL, V, etc.) used for the Monte Carlo simulations are not explicitly listed in the provided text evidence, typically residing in a referenced PK model or supplementary data. |

<sub>queue written 2026-10-07T11:59:13.459883+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angelini_2025 | irrelevant | 4 | 4 | The study reports individual patient PK parameters (clearance, AUC) derived from TDM data using a one-compartment formula, rather than estimating a population-pharmacokinetic model with fixed effects (CL, V, Q, ka) and residual error as required for POP-PK extraction. |
| popPK | Avery_2019 | irrelevant | 2 | 0 | The study is a pharmacodynamic exposure-response analysis using a published PK model, but it does not report original quantitative PK parameters (CL, V, etc.) for daptomycin in this paper. |
| popPK | Balice_2022 | relevant | 10 | 2 | The paper presents a population PK model for daptomycin, but the specific numeric parameter estimates (Table 3) are not provided in the evidence; only IIV percentages are mentioned in the text. |
| popPK | Codde_2025 | irrelevant | 0 | 0 | This is a review article focusing on AI applications, with no original quantitative PK parameter values reported for daptomycin. |
| popPK | Contejean_2023 | irrelevant | 2 | 0 | This is a narrative review summarizing advances in HR-FN management; it discusses daptomycin PK qualitatively but does not provide original quantitative parameter values. |
| popPK | Kunz_2024 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo antimicrobial efficacy investigation (checkerboards, time-kill, vegetation models) and does not report pharmacokinetic parameters for daptomycin. |
| popPK | Mancheño-Losa_2025 | irrelevant | 1 | 1 | This is an in vitro PK/PD efficacy study (CDC biofilm reactor) that simulates drug concentrations in bone; it does not report intrinsic population PK parameters (CL, V, Q) for daptomycin in a biological species. |
| popPK | Menezes_2021 | irrelevant | 3 | 0 | The study is an in vitro PK/PD modeling and simulation study using dynamic models, not an original study measuring quantitative population PK disposition parameters (CL, V, Q) for daptomycin in humans or animals. |
| popPK | Olney_2024 | relevant | 9 | 3 | The paper describes a prospective population PK study for daptomycin in humans, reporting exposure metrics (AUC) and efficacy/toxicity targets, but the specific quantitative model parameters (CL, V, etc.) are likely in supplementary material or tables not included in the provided text. |
| popPK | Schriever_2005 | irrelevant | 2 | 0 | The paper is a review article that describes the pharmacokinetic model (two-compartment) but does not provide specific numeric quantitative disposition parameters (CL, V, etc.). |
| popPK | Soon_2013 | irrelevant | 1 | 0 | This is a Monte Carlo simulation study that reports pharmacodynamic outcomes (pTA/pTOX) derived from literature parameters, but does not report new quantitative PK parameter estimates (CL, V, Q) or model structural details within the provided evidence. |
| popPK | Soraluce_2018 | relevant | 10 | 2 | The paper describes a population PK model for daptomycin in humans and reports specific parameter values (e.g., CL, V) in the text, but the table containing the full parameter estimates and variability (Table 3) is not included in the provided evidence. |
| popPK | Wei_2020 | relevant | 8 | 0 | The study is a pharmacokinetic/pharmacodynamic analysis of daptomycin in pediatric humans, but the specific numeric PK parameter values (CL, V, etc.) used for the Monte Carlo simulations are not explicitly listed in the provided text evidence, typically residing in a referenced PK model or supplementary data. |
| popPK | Yamada_2020 | irrelevant | 2 | 0 | The study describes developing a population pharmacokinetic model and performing simulations, but no numeric PK parameter values (CL, V, Q, ka) are provided in the extracted evidence. |
| popPK | Zhang_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study of daptomycin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:59 UTC</sub>
