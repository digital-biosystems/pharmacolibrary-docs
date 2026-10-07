<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;sisomicin&quot;}]"></div>

# sisomicin

- **generic name:** sisomicin
- **ATC codes:** `J01GB08`
- **DrugBank:** [DB12604](https://go.drugbank.com/drugs/DB12604) · **PubChem:** [CID 36119](https://pubchem.ncbi.nlm.nih.gov/compound/36119)
- **molar mass:** 447.5264 g/mol (C19H37N5O7) — DrugBank
- **groups:** investigational

## About

Sisomicin is an aminoglycoside antibiotic that inhibits protein synthesis in bacteria. It is not an approved medicine and remains investigational, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3962119](https://www.wikidata.org/wiki/Q3962119) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sisomicin | parent | 447.526 | C19H37N5O7 | DrugBank | [36119](https://pubchem.ncbi.nlm.nih.gov/compound/36119) | Firsov_1980, Meyers_1976 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:41 | 2:50 | 0/2/1 | 3/0/0 | 0/0/0 | 119,947/4,231 | einfracz / qwen3.8-27b | 2 | 1/0 | 1/1 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Meyers_1976_reference](drugs/drug_sisomicin/Sisomicin_Meyers1976_reference.md) | — | 1-compartment (no model) | 1 | Meyers BR et al., Pharmacokinetic parameters of sisomicin, Antimicrobial agents and ch… (1976) | [10.1128/AAC.10.1.25](https://doi.org/10.1128/AAC.10.1.25) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Firsov_1980_reference](drugs/drug_sisomicin/Sisomicin_Firsov1980_reference.md) | — | 1-compartment (no model) | 1 | Firsov AA et al., [Pharmacokinetic basis of the nephrotox…, Antibiotiki (1980) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nishimura_1984_reference](drugs/drug_sisomicin/Sisomicin_Nishimura1984_reference.md) | — | 1-compartment (no model) | 0 | Nishimura T et al., [A pharmacokinetic investigation of sis…, The Japanese journal of ant… (1984) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Carmalt_1976_MICs](drugs/drug_sisomicin/pd_Carmalt_1976_MICs.md) | Minimum inhibitory concentrations ← sisomicin · inhibition effect | — | Carmalt ED et al., Clinical experience with tobramycin in…, The American journal of the… (1976) | [10.1097/00000441-197605000-00004](https://doi.org/10.1097/00000441-197605000-00004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Federspil_1976_ototoxicity](drugs/drug_sisomicin/pd_Federspil_1976_ototoxicity.md) | ototoxicity ← sisomicin · model not identified | — | Federspil P, [Ototoxicity of the aminoglycoside anti…, Infection (1976) | [10.1007/BF01638933](https://doi.org/10.1007/BF01638933) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leroy_1978_n_a](drugs/drug_sisomicin/pd_Leroy_1978_n_a.md) | n/a ← Sisomicin · model not identified | — | Leroy A et al., Pharmacokinetics of aminoglycosides in…, Antibiotics and chemotherapy (1978) | [10.1159/000401061](https://doi.org/10.1159/000401061) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 72 matched, 53 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chung_1981.pdf` | Chung M et al., Pharmacokinetic study of sisomicin in h…, Journal of pharmacokinetics… (1981) | popPK | 10 | [10.1007/BF01061025](https://doi.org/10.1007/BF01061025) | [7334458](https://pubmed.ncbi.nlm.nih.gov/7334458) | The text explicitly reports quantitative pharmacokinetic parameters for sisomicin in humans, including two-compartment model parameters, half-life (2.6 hr), renal clearance (55 ml/min), and total body clearance (78 ml/min). |
| `Firsov_1980.pdf` | Firsov AA et al., [Pharmacokinetic basis of the nephrotox…, Antibiotiki (1980) | popPK | 10 | not captured | [7362226](https://pubmed.ncbi.nlm.nih.gov/7362226) | The paper provides explicit numeric values for clearance, volume of distribution, and rate constants for a two-compartment model of sisomicin in rats. |
| `Nishimura_1984.pdf` | Nishimura T et al., [A pharmacokinetic investigation of sis…, The Japanese journal of ant… (1984) | popPK | 10 | not captured | [6481958](https://pubmed.ncbi.nlm.nih.gov/6481958) | The paper reports quantitative PK parameters (ka, Vd, half-life) for sisomicin in children, with all numeric values explicitly listed in the abstract text. |
| `Firsov_1985.pdf` | Firsov AA et al., [Sisomycin pharmacokinetics in the peri…, Antibiotiki i meditsinskaia… (1985) | popPK | 9 | not captured | [4091513](https://pubmed.ncbi.nlm.nih.gov/4091513) | Study reports PK parameters (AUC ratio, linearity) for sisomicin in guinea pigs, but specific numeric CL, V, or Ka values are not explicitly detailed in the text. |
| `Firsov_1983.pdf` | Firsov AA et al., [Simulation of the pharmacokinetics of…, Antibiotiki (1983) | popPK | 8 | not captured | [6651271](https://pubmed.ncbi.nlm.nih.gov/6651271) | The paper describes a two-compartmental model for sisomicin in rat kidneys, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Lode_1975.pdf` | Lode H et al., Comparative clinical pharmacology of ge…, Antimicrobial agents and ch… (1975) | popPK | 8 | [10.1128/AAC.8.4.396](https://doi.org/10.1128/AAC.8.4.396) | [1103722](https://pubmed.ncbi.nlm.nih.gov/1103722) | The study describes a two-compartment PK model for sisomicin in humans and reports peak serum concentrations, but specific numeric values for clearance, volume, and half-life are described qualitatively (as having "slight differences") rather than listed explicitly in the provided text. |
| `Firsov_1982.pdf` | Firsov AA et al., [Build up of a given concentration of t…, Antibiotiki (1982) | popPK | 5 | not captured | [6758682](https://pubmed.ncbi.nlm.nih.gov/6758682) | The study involves sisomicin pharmacokinetics but relies on adult constants for a theoretical model for children, and while infusion rates are provided, standard disposition parameters (CL, V) are not explicitly listed as calculated values in the text. |

<sub>queue written 2026-10-07T11:39:51.488457+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chernykh_1985 | irrelevant | 1 | 0 | This is an in-vitro microcalorimetric study simulating PK profiles to characterize antimicrobial effect kinetics, not a study measuring pharmacokinetic parameters for sisomicin in vivo. |
| popPK | Firsov_1982 | relevant | 5 | 2 | The study involves sisomicin pharmacokinetics but relies on adult constants for a theoretical model for children, and while infusion rates are provided, standard disposition parameters (CL, V) are not explicitly listed as calculated values in the text. |
| popPK | Firsov_1983 | relevant | 8 | 0 | The paper describes a two-compartmental model for sisomicin in rat kidneys, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Firsov_1985 | relevant | 9 | 1 | Study reports PK parameters (AUC ratio, linearity) for sisomicin in guinea pigs, but specific numeric CL, V, or Ka values are not explicitly detailed in the text. |
| popPK | Firsov_1985_2 | irrelevant | 2 | 0 | The study is an in vitro simulation of antimicrobial effects using a dynamic system and does not report quantitative pharmacokinetic parameter values for sisomicin in a biological subject. |
| PGx | Firsov_1987 | not_relevant | 0 | 0 | The paper discusses in vitro antimicrobial kinetics and pharmacokinetic profiles but does not report any genetic variants or genotypes affecting drug parameters. |
| PGx | Firsov_1990 | not_relevant | 0 | 0 | The paper describes an in vitro dynamic model for sisomicin using simulated human PK variability, but it does not report any association between specific gene variants or genotypes and pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lode_1975 | relevant | 8 | 2 | The study describes a two-compartment PK model for sisomicin in humans and reports peak serum concentrations, but specific numeric values for clearance, volume, and half-life are described qualitatively (as having "slight differences") rather than listed explicitly in the provided text. |
| popPK | Navashin_1989 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic simulation that references human PK profiles to set up conditions, but it does not report original quantitative PK parameter values (CL, V, etc.) for sisomicin. |
| popPK | Pechere_1978 | irrelevant | 2 | 0 | The study investigates netilmicin (a derivative/analogue) and only qualitatively compares its volume of distribution to sisomicin, without providing quantitative PK parameters for sisomicin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:39 UTC</sub>
