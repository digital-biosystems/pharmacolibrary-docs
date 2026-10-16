<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;mepyramine&quot;}]"></div>

# mepyramine

- **generic name:** mepyramine
- **ATC codes:** `D04AA02`, `R06AC01`
- **DrugBank:** [DB06691](https://go.drugbank.com/drugs/DB06691) · **PubChem:** [CID 4992](https://pubchem.ncbi.nlm.nih.gov/compound/4992)
- **molar mass:** 285.384 g/mol (C17H23N3O) — DrugBank
- **groups:** approved, vet_approved

## About

Mepyramine (pyrilamine) is an antihistamine used to treat allergic conditions such as giant papillary conjunctivitis. It is an approved drug, used topically on the skin and systemically for allergies, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3800087](https://www.wikidata.org/wiki/Q3800087) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mepyramine | parent | 285.384 | C17H23N3O | DrugBank | [4992](https://pubchem.ncbi.nlm.nih.gov/compound/4992) | Kelly_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:51 | 10:44 | 0/1/0 | 4/4/1 | 0/0/0 | 193,090/33,391 | openai / gpt-6-luna | 2 | 0/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kelly_1987_reference](drugs/drug_mepyramine/Mepyramine_Kelly1987_reference.md) | — | 1-compartment (no model) | 1 | Kelly DW et al., The metabolism and elimination of pyril…, Drug metabolism and disposi… (1987) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Arrang_1985_3H_glycogen_hydrolysis](drugs/drug_mepyramine/pd_Arrang_1985_3H_glycogen_hydrolysis.md) | [3H]glycogen hydrolysis ← mepyramine · inhibition effect | — | Arrang JM et al., Actions of betahistine at histamine rec…, European journal of pharmac… (1985) | [10.1016/0014-2999(85)90115-3](https://doi.org/10.1016/0014-2999(85)90115-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Claro_1987_phosphoinositide_hydrolysis](drugs/drug_mepyramine/pd_Claro_1987_phosphoinositide_hydrolysis.md) | phosphoinositide hydrolysis ← mepyramine · inhibition effect | — | Claro E et al., Histamine-stimulated phosphoinositide h…, Molecular pharmacology (1987) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sadek_2015_acetylcholine_100_M_induced_responses](drugs/drug_mepyramine/pd_Sadek_2015_acetylcholine_100_M_induced_responses.md) | acetylcholine (100 µM)-induced responses ← pyrilamine (PYR) · inhibition effect | — | Sadek B et al., Effects of antihistamines on the functi…, European journal of pharmac… (2015) | [10.1016/j.ejphar.2014.10.046](https://doi.org/10.1016/j.ejphar.2014.10.046) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [White_1993_3H_inositol_phosphates](drugs/drug_mepyramine/pd_White_1993_3H_inositol_phosphates.md) | accumulation of [3H]-inositol phosphates ← mepyramine · inhibition effect | — | White TE et al., Histamine H1-receptor-mediated inositol…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13462.x](https://doi.org/10.1111/j.1476-5381.1993.tb13462.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chang_1988_contraction](drugs/drug_mepyramine/pd_Chang_1988_contraction.md) | contraction ← pyrilamine · inhibition effect | — | Chang JY et al., Differential vasomotor action of noradr…, Acta physiologica Scandinav… (1988) | [10.1111/j.1748-1716.1988.tb08302.x](https://doi.org/10.1111/j.1748-1716.1988.tb08302.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Claro_1986_3H_inositol_1_phosphate_accumulation](drugs/drug_mepyramine/pd_Claro_1986_3H_inositol_1_phosphate_accumulation.md) | [3H]inositol 1-phosphate accumulation ← mepyramine · inhibition effect | — | Claro E et al., Phosphoinositide hydrolysis mediated by…, European journal of pharmac… (1986) | [10.1016/0014-2999(86)90659-x](https://doi.org/10.1016/0014-2999(86)90659-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Hao_2021_voltage_gated_sodium_channel_currents](drugs/drug_mepyramine/pd_Hao_2021_voltage_gated_sodium_channel_currents.md) | voltage-gated sodium channel currents ← mepyramine · inhibition effect | — | Hao J et al., The widely used antihistamine mepyramin…, FASEB journal : official pu… (2021) | [10.1096/fj.202100976RR](https://doi.org/10.1096/fj.202100976RR) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ottosson_1989_relaxation](drugs/drug_mepyramine/pd_Ottosson_1989_relaxation.md) | relaxation ← mepyramine · inhibition effect | — | Ottosson A et al., Pharmacological characterization of his…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb05344.x](https://doi.org/10.1111/j.1365-2125.1989.tb05344.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Zeng_1997_PAF_induced_aggregation](drugs/drug_mepyramine/pd_Zeng_1997_PAF_induced_aggregation.md) | PAF-induced aggregation ← mepyramine · inhibition effect | — | Zeng S et al., Mepyramine inhibits platelet activating…, Zhongguo yao li xue bao = A… (1997) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mepyramine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` unknown, `SLC22A5` unknown | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` unknown | DrugBank actor |
| absorption | small intestine | `SLC22A4` unknown, `SLC22A5` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 475 matched, 78 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_16 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kelly_1987.pdf` | Kelly DW et al., The metabolism and elimination of pyril…, Drug metabolism and disposi… (1987) | popPK | 9 | not captured | [2888617](https://pubmed.ncbi.nlm.nih.gov/2888617) | Rat pyrilamine (mepyramine) is modeled with a one-compartment model, and numeric elimination half-lives are provided. |
| `Szabo_1993.pdf` | Szabo Z et al., Noncompartmental and compartmental mode…, Synapse (New York, N.Y.) (1993) | popPK | 8 | [10.1002/syn.890150403](https://doi.org/10.1002/syn.890150403) | [7908760](https://pubmed.ncbi.nlm.nih.gov/7908760) | A compartment model of radiolabeled pyrilamine is described, but no numeric parameter values are provided. |
| `Hashemzadeh-Gargari_1992.pdf` | Hashemzadeh-Gargari H et al., Histamine activates chloride conductanc…, Journal of neurophysiology (1992) | pd | 5 | [10.1152/jn.1992.68.1.9](https://doi.org/10.1152/jn.1992.68.1.9) | [1381422](https://www.ncbi.nlm.nih.gov/pubmed/1381422) | metadata signals extractable PD data (EC50) |
| `Barker_1983.pdf` | Barker LA et al., Selectivity of 4-methylhistamine at H1-…, British journal of pharmaco… (1983) | pd | 4 | [10.1111/j.1476-5381.1983.tb11050.x](https://doi.org/10.1111/j.1476-5381.1983.tb11050.x) | [6228278](https://www.ncbi.nlm.nih.gov/pubmed/6228278) | metadata signals extractable PD data (EC50) |
| `Casale_1989.pdf` | Casale TB, The interaction of azelastine with huma…, The Journal of allergy and… (1989) | pd | 4 | [10.1016/0091-6749(89)90013-4](https://doi.org/10.1016/0091-6749(89)90013-4) | [2540229](https://www.ncbi.nlm.nih.gov/pubmed/2540229) | metadata signals extractable PD data (IC50) |
| `Claro_1987.pdf` | Claro E et al., Histamine-stimulated phosphoinositide h…, Molecular pharmacology (1987) | pd | 4 | not captured | [2823091](https://www.ncbi.nlm.nih.gov/pubmed/2823091) | metadata signals extractable PD data (concentration-effect) |
| `Fanous_1993.pdf` | Fanous K et al., Azelastine and allergen transduction si…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00173212](https://doi.org/10.1007/BF00173212) | [7509459](https://www.ncbi.nlm.nih.gov/pubmed/7509459) | metadata signals extractable PD data (IC50) |
| `Gardiner_1988.pdf` | Gardiner PJ et al., Characterisation of the leukotriene rec…, Agents and actions. Supplem… (1988) | pd | 4 | [10.1007/978-3-0348-9156-1_8](https://doi.org/10.1007/978-3-0348-9156-1_8) | [2845748](https://www.ncbi.nlm.nih.gov/pubmed/2845748) | metadata signals extractable PD data (EC50) |
| `Gonzalez_1993.pdf` | Gonzalez R et al., Histamine H1 receptor binding sites in…, General pharmacology (1993) | pd | 4 | [10.1016/0306-3623(93)90007-k](https://doi.org/10.1016/0306-3623(93)90007-k) | [8482504](https://www.ncbi.nlm.nih.gov/pubmed/8482504) | metadata signals extractable PD data (IC50) |
| `Hew_1990.pdf` | Hew RW et al., Characterization of histamine H3-recept…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14130.x](https://doi.org/10.1111/j.1476-5381.1990.tb14130.x) | [1963802](https://www.ncbi.nlm.nih.gov/pubmed/1963802) | metadata signals extractable PD data (EC50) |
| `Marley_1998.pdf` | Marley PD et al., Activation of tyrosine hydroxylase by h…, Journal of the autonomic ne… (1998) | pd | 4 | [10.1016/s0165-1838(98)00046-0](https://doi.org/10.1016/s0165-1838(98)00046-0) | [9686897](https://www.ncbi.nlm.nih.gov/pubmed/9686897) | metadata signals extractable PD data (EC50) |
| `Sigrist_1986.pdf` | Sigrist S et al., Specific receptor and cardiovascular ef…, Endocrinology (1986) | pd | 4 | [10.1210/endo-119-1-381](https://doi.org/10.1210/endo-119-1-381) | [3013594](https://www.ncbi.nlm.nih.gov/pubmed/3013594) | metadata signals extractable PD data (EC50) |
| `Soria-Jasso_1997.pdf` | Soria-Jasso LE et al., Histamine H1 receptors and inositol pho…, Neuroscience letters (1997) | pd | 4 | [10.1016/s0304-3940(97)00209-7](https://doi.org/10.1016/s0304-3940(97)00209-7) | [9147388](https://www.ncbi.nlm.nih.gov/pubmed/9147388) | metadata signals extractable PD data (EC50) |
| `Tabarean_2013.pdf` | Tabarean IV, Functional pharmacology of H1 histamine…, British journal of pharmaco… (2013) | pd | 4 | [10.1111/bph.12286](https://doi.org/10.1111/bph.12286) | [23808378](https://www.ncbi.nlm.nih.gov/pubmed/23808378) | metadata signals extractable PD data (IC50) |
| `Trzeciakowski_1987.pdf` | Trzeciakowski JP, Inhibition of guinea pig ileum contract…, The Journal of pharmacology… (1987) | pd | 4 | not captured | [2826760](https://www.ncbi.nlm.nih.gov/pubmed/2826760) | metadata signals extractable PD data (EC50) |
| `Wallace_1983.pdf` | Wallace RM et al., Temperature dependence of the binding o…, Molecular pharmacology (1983) | pd | 4 | not captured | [6135145](https://www.ncbi.nlm.nih.gov/pubmed/6135145) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T14:46:16.762736+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agulló_1990 | irrelevant | 0 | 0 | Mepyramine is only an in-vitro H1 antagonist, with no pharmacokinetic parameters reported. |
| popPK | Arbonés_1988 | irrelevant | 0 | 0 | Mepyramine is only a radiolabeled receptor-binding probe; the reported Kd and Bmax are not pharmacokinetic parameters. |
| popPK | Arrang_1985 | irrelevant | 0 | 0 | Mepyramine is only a receptor-binding tracer or antagonist; no mepyramine disposition parameters are reported. |
| popPK | Arrang_1987 | irrelevant | 0 | 0 | This is an in-vitro study of histamine synthesis and reports no mepyramine pharmacokinetic parameters. |
| popPK | Barker_1983 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Benedito_1991 | irrelevant | 0 | 0 | Mepyramine is only an H1-receptor antagonist probe; no pharmacokinetic parameters are reported. |
| popPK | Bristow_1991 | irrelevant | 0 | 0 | Mepyramine is used only as a histamine antagonist, with no pharmacokinetic parameters reported. |
| popPK | Bristow_1993 | irrelevant | 0 | 0 | Mepyramine is only an H1 antagonist in an in-vitro cell study, with no pharmacokinetic parameters reported. |
| popPK | Chang_1988 | irrelevant | 0 | 0 | Mepyramine (pyrilamine) is used only as an in-vitro receptor antagonist, with no pharmacokinetic parameters reported. |
| popPK | Claro_1986 | irrelevant | 0 | 0 | Mepyramine is used as an H1-receptor antagonist in a rat brain assay, with no pharmacokinetic parameters reported. |
| popPK | Claro_1987 | irrelevant | 0 | 0 | This rat receptor-pharmacology study reports no quantitative disposition or population-PK parameters for mepyramine. |
| popPK | Colucci_2011 | irrelevant | 0 | 0 | Mepyramine is only tested as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| popPK | Dickenson_1992 | irrelevant | 0 | 0 | Mepyramine is used only as an H1-receptor antagonist in cell experiments, with no pharmacokinetic parameters reported. |
| popPK | Dickenson_1994 | irrelevant | 0 | 0 | Mepyramine is used in an in-vitro receptor-binding assay, with no pharmacokinetic disposition parameters reported. |
| popPK | Donaldson_1985 | irrelevant | 0 | 0 | This receptor-signaling study reports no mepyramine pharmacokinetic parameters. |
| popPK | Donaldson_1986 | irrelevant | 0 | 0 | Mepyramine is used as a receptor antagonist, and no pharmacokinetic parameters are reported. |
| popPK | Foster_1997 | irrelevant | 0 | 0 | Mepyramine is only an H1-receptor antagonist, and no pharmacokinetic parameters are reported. |
| popPK | Gardiner_1988 | irrelevant | 0 | 0 | Mepyramine is only a pharmacological antagonist, and no mepyramine pharmacokinetic parameters are reported. |
| popPK | Gera_2013 | irrelevant | 0 | 0 | The paper reports receptor-binding and vascular pharmacology, not mepyramine disposition parameters. |
| popPK | Girard_1984 | irrelevant | 0 | 0 | Mepyramine is only an antagonist comparator, and no pharmacokinetic parameters are reported. |
| popPK | Hall_1992 | irrelevant | 0 | 0 | Mepyramine is an in-vitro antagonist, and its reported affinity is not a pharmacokinetic parameter. |
| popPK | Hashemzadeh-Gargari_1992 | irrelevant | 0 | 0 | Pyrilamine (mepyramine) is only a pharmacological comparator, and no pharmacokinetic parameters are reported. |
| popPK | Hew_1990 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| popPK | Izzo_1998 | irrelevant | 0 | 0 | Mepyramine is used only as a receptor antagonist, with no pharmacokinetic parameters reported. |
| popPK | Korolkiewicz_1997 | irrelevant | 0 | 0 | Mepyramine is only a co-administered pharmacological antagonist; no mepyramine pharmacokinetic parameters are reported. |
| PGx | Kortunay_2001 | not_relevant | 0 | 0 | The paper reports mepyramine inhibiting CYP2D6-mediated sparteine oxidation, not a gene-related effect on mepyramine’s PK or PD. |
| popPK | Livett_1986 | irrelevant | 0 | 0 | Mepyramine is only an in-vitro antagonist, and no pharmacokinetic parameters are reported. |
| popPK | Marley_1991 | irrelevant | 0 | 0 | Mepyramine is only an antagonist in an in-vitro cell assay, with no pharmacokinetic parameters reported. |
| popPK | Marley_1998 | irrelevant | 0 | 0 | Mepyramine is only an in-vitro H1 antagonist, and no mepyramine pharmacokinetic parameters are reported. |
| popPK | Medrano_1992 | irrelevant | 0 | 0 | Mepyramine is used only as an H1 antagonist, and no pharmacokinetic parameters are reported. |
| popPK | Menghin_2003 | irrelevant | 0 | 0 | Mepyramine is only an in-vitro receptor antagonist, with no mepyramine pharmacokinetic parameters reported. |
| PGx | Nwokocha_2012 | not_relevant | 0 | 0 | The paper mentions mepyramine only as an antagonist in a rat experiment and reports no genetic effects on its PK or PD parameters. |
| popPK | Racké_1995 | irrelevant | 0 | 0 | Mepyramine is only a histamine-receptor antagonist probe, and no mepyramine pharmacokinetic parameters are reported. |
| PGx | Renier_2007 | not_relevant | 0 | 0 | The pilot screen included mepyramine but found no mutants and reports no genotype-related PK or PD effect. |
| popPK | Sadek_2004 | irrelevant | 0 | 0 | Mepyramine is only an in-vitro antagonist comparator; no pharmacokinetic parameters are reported. |
| popPK | Sigrist_1986 | irrelevant | 0 | 0 | Mepyramine is only used as a co-administered histamine antagonist, and no mepyramine pharmacokinetic values are reported. |
| popPK | Smit_1996 | irrelevant | 0 | 0 | Mepyramine is only a receptor-binding probe; the study reports no pharmacokinetic parameters. |
| popPK | Soria-Jasso_1997 | irrelevant | 0 | 0 | This rat receptor-binding study reports no pharmacokinetic disposition parameters for mepyramine. |
| popPK | Stanimirovic_1994 | irrelevant | 0 | 0 | Mepyramine is used as a receptor antagonist in a cell assay, with no pharmacokinetic disposition parameters reported. |
| popPK | Szabo_1993 | relevant | 8 | 0 | A compartment model of radiolabeled pyrilamine is described, but no numeric parameter values are provided. |
| popPK | Trzeciakowski_1987 | irrelevant | 0 | 0 | Mepyramine (pyrilamine) is only used as an H1 blocker; no pharmacokinetic parameters are reported. |
| PGx | Voss_1994 | not_relevant | 0 | 0 | Mepyramine is used as a radioligand in a rat enzyme-binding assay; the paper does not report a genetic effect on its PK or PD. |
| popPK | White_1993 | irrelevant | 0 | 0 | This is an in-vitro receptor pharmacology study, reporting mepyramine antagonism rather than pharmacokinetic disposition parameters. |
| popPK | Yanai_1990 | irrelevant | 0 | 0 | The four-compartment model describes receptor binding, not mepyramine disposition, and reports no PK parameters. |
| popPK | Yanai_1991 | irrelevant | 2 | 0 | Pyrilamine (mepyramine) is used as a receptor-binding tracer, and no numeric PK parameter values are provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:46 UTC</sub>
